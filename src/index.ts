import * as core from '@actions/core';
import { GitHubService } from './github';
import { ReviewEngine } from './reviewer';
import { AIService } from './ai';
import { ReportGenerator } from './report';
import { RuleContext, RuleResult } from './types';

import { DebugLogsRule } from './rules/debugLogs';
import { TodoRule } from './rules/todo';
import { LargePRRule } from './rules/largePR';
import { SecretsRule } from './rules/secrets';
import { MissingTestsRule } from './rules/missingTests';
import { GoodCommitRule } from './rules/conventionalCommits';
import { DependencyAnalysisRule } from './rules/dependencyAnalysis';

async function run() {
  try {
    core.info('PRPilot is starting...');

    const githubToken = core.getInput('github-token', { required: true });
    const apiKey = core.getInput('api-key', { required: true });

    const githubService = new GitHubService(githubToken);
    const aiService = new AIService(apiKey);
    const reportGenerator = new ReportGenerator();

    const files = await githubService.getChangedFiles();
    const commits = await githubService.getCommitMessages();
    const context: RuleContext = { files, commits };

    const engine = new ReviewEngine();
    engine.registerRule(new DebugLogsRule());
    engine.registerRule(new TodoRule());
    engine.registerRule(new LargePRRule());
    engine.registerRule(new SecretsRule());
    engine.registerRule(new MissingTestsRule());
    engine.registerRule(new GoodCommitRule());
    engine.registerRule(new DependencyAnalysisRule());

    const staticResults = await engine.run(context);

    core.info('Requesting smart code suggestions');
    const aiSuggestions = await aiService.generateSuggestions(files);
    
    const aiRuleResult: RuleResult = {
      ruleName: 'AI Code Review Suggestions',
      pass: aiSuggestions.length === 0,
      warnings: aiSuggestions
    };

    const finalResults = [...staticResults, aiRuleResult];
    const markdownReport = reportGenerator.generateMarkdown(finalResults);
    
    await githubService.createOrUpdateReviewComment(markdownReport);
    
    core.info('PRPilot review completed successfully!');
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(`Action failed with error: ${error.message}`);
    } else {
      core.setFailed('Unexpected error occurred during execution');
    }
  }
}

run();
