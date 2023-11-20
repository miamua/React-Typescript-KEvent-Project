import { IContact } from "../components/kpopEvent/IContact";
import { ISponsor } from "../components/kpopEvent/ISponsor";

export type SponsorAndContactResponseType = {
  status: string;
  statusCode: number;
  items?: number;
  data: ISponsor | IContact;
};
