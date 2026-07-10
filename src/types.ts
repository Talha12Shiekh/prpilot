export interface PRFile {
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  patch?: string;
}

export interface RuleContext {
  files: PRFile[];
  commits: string[];
}

export interface RuleResult {
  ruleName: string;
  pass: boolean;
  warnings: string[];
}

export interface ReviewRule {
  name: string;
  check(context: RuleContext): Promise<RuleResult> | RuleResult;
}
