import { ReviewRule, RuleContext, RuleResult } from '../types';

export class TodoRule implements ReviewRule {
  public name = 'No TODOs';

  public check(context: RuleContext): RuleResult {
    const warnings: string[] = [];
    
    const todoPatterns = [/\bTODO\b/i, /\bFIXME\b/i];

    for (const file of context.files) {
      if (!file.patch) continue;

      const addedLines = file.patch
        .split('\n')
        .filter(line => line.startsWith('+') && !line.startsWith('+++'));

      for (const line of addedLines) {
        if (todoPatterns.some(pattern => pattern.test(line))) {
          const codeSnippet = line.substring(1).trim();
          warnings.push(`File \`${file.filename}\` contains a TODO/FIXME: \`${codeSnippet}\``);
        }
      }
    }

    return {
      ruleName: this.name,
      pass: warnings.length === 0,
      warnings,
    };
  }
}
