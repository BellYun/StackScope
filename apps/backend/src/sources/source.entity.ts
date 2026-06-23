export type SourceType = "manual" | "csv" | "seed";

export interface Source {
  id: string;
  name: string;
  type: SourceType;
  createdAt: string;
}
