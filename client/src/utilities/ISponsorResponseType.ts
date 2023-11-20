import { ISponsor } from "../components/kpopEvent/ISponsor";
import { IResponseBaseType } from "./IResponseBaseType";

export interface ISponsorResponseType extends IResponseBaseType {
  items: number;
  data: ISponsor;
}
