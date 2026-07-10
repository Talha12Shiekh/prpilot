import { ReviewRule, RuleContext, RuleResult } from '../types';

export class GoodCommitRule implements ReviewRule {
  public name = 'Good Commit';

  public check(context: RuleContext): RuleResult {
    const warnings: string[] = [];
    
    const goodCommitRegex = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([a-z0-9_\-\.]+\))?!?: .+$/i;

    for (const commitMsg of context.commits) {
      
      const subject = commitMsg.split('\n')[0].trim();
      
      if (!goodCommitRegex.test(subject)) {
        warnings.push(`Commit message "${subject}" not follows good commit format`);
      }
    }

    return {
      ruleName: this.name,
      pass: warnings.length === 0,
      warnings,
    };
  }
}
