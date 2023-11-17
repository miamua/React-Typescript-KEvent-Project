import { IPerformers } from "../components/performace/IPerformers";
import { IResponseBaseType } from "./IResponseBaseType";

export interface IPerformanceResponseType extends IResponseBaseType {
  items: number;
  data: IPerformers[];
}
