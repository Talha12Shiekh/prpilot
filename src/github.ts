import * as github from '@actions/github';
import { PRFile } from './types';

export class GitHubService {
  private octokit: ReturnType<typeof github.getOctokit>;

  constructor(token: string) {
    this.octokit = github.getOctokit(token);
  }
  
  public getPRMetadata() {
    const { context } = github;

    if (!context.payload.pull_request) {
      throw new Error('This action can only be run on Pull Request events.');
    }

    const pr = context.payload.pull_request;
    
    return {
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: pr.number,
      title: pr.title,
      body: pr.body || '',
      author: pr.user?.login || 'unknown',
    };
  }

  /**
   * Fetches the list of files changed in the PR and filters out non-reviewable files.
   */
  public async getChangedFiles(): Promise<PRFile[]> {
    const meta = this.getPRMetadata();
    
    const { data: files } = await this.octokit.rest.pulls.listFiles({
      owner: meta.owner,
      repo: meta.repo,
      pull_number: meta.pull_number,
      per_page: 100, // Handle up to 100 files for now
    });

    // Filter out files that we shouldn't review (e.g., binaries, lockfiles)
    const reviewableFiles = files.filter(file => {
      const excludedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.lock'];
      const isExcluded = excludedExtensions.some(ext => file.filename.endsWith(ext));
      
      // Ignore deleted files (nothing to review) and excluded extensions
      return !isExcluded && file.status !== 'removed';
    });

    return reviewableFiles as PRFile[];
  }

  /**
   * Fetches all commit messages for the Pull Request.
   * Useful for the Conventional Commits rule.
   */
  public async getCommitMessages(): Promise<string[]> {
    const meta = this.getPRMetadata();
    
    const { data: commits } = await this.octokit.rest.pulls.listCommits({
      owner: meta.owner,
      repo: meta.repo,
      pull_number: meta.pull_number,
      per_page: 100,
    });

    return commits.map(commitObj => commitObj.commit.message);
  }
}
