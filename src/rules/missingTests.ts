import { ReviewRule, RuleContext, RuleResult } from '../types';

export class MissingTestsRule implements ReviewRule {
  public name = 'Missing Tests';

  public check(context: RuleContext): RuleResult {
    const hasSourceChanges = context.files.some(f => 
      (f.filename.startsWith('src/') || f.filename.startsWith('lib/') || f.filename.startsWith('app/')) &&
      (f.filename.endsWith('.ts') || f.filename.endsWith('.js') || f.filename.endsWith('.tsx') || f.filename.endsWith('.jsx')) &&
      !f.filename.includes('.test.') &&
      !f.filename.includes('.spec.')
    );

    const hasTestChanges = context.files.some(f => 
      f.filename.includes('.test.') || 
      f.filename.includes('.spec.') || 
      f.filename.includes('__tests__/') ||
      f.filename.startsWith('test/') ||
      f.filename.startsWith('tests/')
    );

    if (hasSourceChanges && !hasTestChanges) {
      return {
        ruleName: this.name,
        pass: false,
        warnings: [
          'This PR modified source code but has no changes to test files'
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
