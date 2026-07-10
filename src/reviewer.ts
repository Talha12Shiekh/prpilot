import { RuleContext, RuleResult, ReviewRule } from './types';

export class ReviewEngine {
  private rules: ReviewRule[] = [];

  public registerRule(rule: ReviewRule) {
    this.rules.push(rule);
  }

  public async run(context: RuleContext): Promise<RuleResult[]> {
    const results: RuleResult[] = [];
    
    for (const rule of this.rules) {
      try {
        const result = await rule.check(context);
        results.push(result);
      } catch (error) {
        results.push({
          ruleName: rule.name,
          pass: false,
          warnings: [`Rule execution failed: ${error instanceof Error ? error.message : String(error)}`]
        });
      }
    }
    
    return results; 
  }
}
