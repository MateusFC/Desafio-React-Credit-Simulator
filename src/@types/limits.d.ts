export interface LimitsData {
  min: number;
  max: number;
  currency: string;
}

export interface LimitsContextValue {
  limits: LimitsData | null;
  loading: boolean;
}
