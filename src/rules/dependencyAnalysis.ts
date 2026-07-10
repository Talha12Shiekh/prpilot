import { ReviewRule, RuleContext, RuleResult } from '../types';

export class DependencyAnalysisRule implements ReviewRule {
  public name = 'Dependency Analysis';

  public check(context: RuleContext): RuleResult {
    const warnings: string[] = [];
    
    const packageJsonFile = context.files.find(f => f.filename === 'package.json');

    if (packageJsonFile && packageJsonFile.patch) {
      const addedLines = packageJsonFile.patch
        .split('\n')
        .filter(line => line.startsWith('+') && !line.startsWith('+++'));

      const hasNewDependency = addedLines.some(line => 
        /"[a-zA-Z0-9\-@/]+"\s*:\s*"[\^~]?[0-9a-zA-Z\.\-]+"/i.test(line)
      );

      if (hasNewDependency) {
        warnings.push('This PR adds new dependencies to `package.json');
      }
    }

    return {
      ruleName: this.name,
      pass: warnings.length === 0,
      warnings,
    };
  }
}
