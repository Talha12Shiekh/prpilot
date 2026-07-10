import { ReviewRule, RuleContext, RuleResult } from '../types';

export class LargePRRule implements ReviewRule {
  public name = 'Large PR Check';
  
  private maxChanges = 500;

  public check(context: RuleContext): RuleResult {
    let totalChanges = 0;

    for (const file of context.files) {
      totalChanges += file.changes;
    }

    if (totalChanges > this.maxChanges) {
      return {
        ruleName: this.name,
        pass: false,
        warnings: [
          `This Pull Request is too large (Total changes: ${totalChanges}). Break it into multiple PRs`  
        ],
      };
    }

    return {
      ruleName: this.name,
      pass: true,
      warnings: [],
    };
  }
}
