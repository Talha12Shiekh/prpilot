export interface PRFile {
  filename: string;
  status: string; 
  additions: number;
  deletions: number;
  changes: number;
  patch?: string;
}
