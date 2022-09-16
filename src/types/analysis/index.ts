export type AnalysisComponentsList = Array<{
  id: string;
  type: string;
  span: number;
  col: Array<{
    title: string;
    headerComponent?: string;
    headerProps?: object;
    contentComponent: string;
    contentProps: object;
  }>;
}>;
