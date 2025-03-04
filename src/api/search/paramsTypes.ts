export interface GetSearchParams extends Record<string, string | number | boolean | undefined> {
  query: string;
}