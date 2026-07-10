import { ReviewRule, RuleContext, RuleResult } from '../types';

export class DebugLogsRule implements ReviewRule {
  public name = 'No Debug Logs';

  public check(context: RuleContext): RuleResult {
    const warnings: string[] = [];
  
    const debugPatterns = [/console\.log\s*\(/, /debugger\s*;/];

    for (const file of context.files) {
      if (!file.patch) continue;

      const addedLines = file.patch
        .split('\n')
        .filter(line => line.startsWith('+') && !line.startsWith('+++'));

      for (const line of addedLines) {
        if (debugPatterns.some(pattern => pattern.test(line))) {
          const codeSnippet = line.substring(1).trim();
          warnings.push(`File \`${file.filename}\` contains debug code: \`${codeSnippet}\``);
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
