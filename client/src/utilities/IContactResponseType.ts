import { IContact } from "../components/kpopEvent/IContact";
import { IResponseBaseType } from "./IResponseBaseType";

export interface IContactResponseType extends IResponseBaseType {
  items: number;
  data: IContact;
}
