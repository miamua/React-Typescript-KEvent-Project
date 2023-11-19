import { IPerformers } from "./IPerformers";

export interface IPerformanceDetail extends IPerformers {
  members: string[];
  schedule: { time: string; songs: string[] }[];
}
