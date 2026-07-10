import { ReviewRule, RuleContext, RuleResult } from '../types';

export class SecretsRule implements ReviewRule {
  public name = 'No Hardcoded Secrets';

  public check(context: RuleContext): RuleResult {
    const warnings: string[] = [];
    
    const secretPatterns = [
      /(?:api[_-]?key|secret|token|password)[\s:=]+['"][a-zA-Z0-9\-_]{16,}['"]/i,
      /AKIA[0-9A-Z]{16}/, 
      /-----BEGIN (?:RSA )?PRIVATE KEY-----/, 
      /Bearer\s+[a-zA-Z0-9\-_]{16,}/i 
    ];

    for (const file of context.files) {
      if (!file.patch) continue;

      const addedLines = file.patch
        .split('\n')
        .filter(line => line.startsWith('+') && !line.startsWith('+++'));

      for (const line of addedLines) {
        if (secretPatterns.some(pattern => pattern.test(line))) {
          const codeSnippet = line.substring(1).trim();
          const truncated = codeSnippet.substring(0, 30) + '...';
          warnings.push(`File \`${file.filename}\` contains a hardcoded secret: \`${truncated}\``);
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
