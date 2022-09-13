export type AnalysisComponentsList = Array<{
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
