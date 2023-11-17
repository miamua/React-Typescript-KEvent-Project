import { IPerformers, ISchedule } from "./IPerformers";

export interface IPerformanceDetail extends IPerformers {
  members: string[];
  schedule: { time: string; songs: string[] }[];
}