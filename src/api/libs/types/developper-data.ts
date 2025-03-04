export interface DeveloperData {
  forks?: number | null;
  stars?: number | null;
  subscribers?: number | null;
  total_issues?: number | null;
  closed_issues?: number | null;
  pull_requests_merged?: number | null;
  pull_request_contributors?: number | null;
  code_additions_deletions_4_weeks?: {
    additions?: number | null;
    deletions?: number | null;
  };
  commit_count_4_weeks?: number | null;
  last_4_weeks_commit_activity_series?: number[];
}