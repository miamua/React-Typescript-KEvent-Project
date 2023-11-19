import { IPerformanceDetail } from "../components/performace/IPerformanceDetail";
import { IResponseBaseType } from "./IResponseBaseType";

export interface IPerformanceDetailResponseType extends IResponseBaseType {
  data: IPerformanceDetail;
}
