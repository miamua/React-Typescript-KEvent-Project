import { IPerformaceDetail } from "../components/performace/IPerformanceDetail";
import { IResponseBaseType } from "./IResponseBaseType";

export interface IPerformanceDetailResponseType extends IResponseBaseType {
  data: IPerformaceDetail;
}
