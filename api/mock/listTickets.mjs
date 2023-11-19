import TICKETS from "./tickets.mjs";

export const listAllTickets = () => {
  return TICKETS;
};

export const getTicketDetails = (id) => {
  return TICKETS.find((t) => t.id === id);
};
