/*interface Schedule extends Performers {
  time: string;
  songs: string[];
}

export interface Performers {
  id: number;
  group: string;
  members: string[];
  schedule: Schedule[];
  imgUrl: string;
}*/

import { IPerformers } from "./IPerformers";

interface TicketPrices {
  [key: string]: string;
}

interface TicketInfo {
  available_tickets: number;
  ticket_types: string[];
  ticket_prices: TicketPrices;
}

interface Sponsorship {
  main_sponsor: string;
  supporting_sponsors: string[];
}

interface ContactInfo {
  organizer_email: string;
  organizer_phone: string;
}

export interface IEvent {
  id: number;
  name: string;
  date: string[];
  location: string;
  organizer: string;
  performers: IPerformers[];
  ticket_info: TicketInfo;
  sponsorship: Sponsorship;
  contact_info: ContactInfo;
}

export interface IEventsData {
  events: IEvent[];
}
