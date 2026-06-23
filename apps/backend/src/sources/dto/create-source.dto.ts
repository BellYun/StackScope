import type { SourceType } from "../source.entity";

export interface CreateSourceDto {
  name: string;
  type?: SourceType;
}
