import { IPerformanceDetail } from "../components/performace/IPerformanceDetail";
import { IPerformers } from "../components/performace/IPerformers";

export type PerformanceResponseType = {
  status: string;
  statusCode: number;
  items?: number;
  data: IPerformers[] | IPerformanceDetail;
};

///Dont use?????? can remove???
