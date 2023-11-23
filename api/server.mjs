import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

import {
  eventDetail,
  getPerformance,
  listAllActivities,
  getAllSponsors,
} from "./mock/event.mjs";
import { getTicketDetails, listAllTickets } from "./mock/listTickets.mjs";

const app = express();

app.use(cors());
app.use(bodyParser.json());

//All sponsor
app.get("/api/sponsors", (req, res) => {
  const sponsors = getAllSponsors();
  res.status(200).json({
    status: "Sucess",
    statusCode: 200,
    data: sponsors,
  });
});

//All Performances
app.get("/api/performances", (req, res) => {
  const activities = listAllActivities();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: activities.length,
    data: activities,
  });
});

//Specific performance
app.get("/api/performance/:id", (req, res) => {
  const performance = getPerformance(+req.params.id);
  res
    .status(200)
    .json({ status: "Success", statusCode: 200, data: performance ?? null });
});

//Event details
app.get("/api/event", (req, res) => {
  const event = eventDetail();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: event.length,
    data: event,
  });
});

//All tickets
app.get("/api/tickets", (req, res) => {
  const tickets = listAllTickets();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: tickets.length,
    data: tickets,
  });
});

// POST endpoint to create a new ticket
app.post("/api/tickets", (req, res) => {
  const newTicket = req.body;
  saveTicket(newTicket);

  res.status(201).json({
    status: "Success",
    statusCode: 201,
    data: newTicket,
  });
});

function saveTicket(newTicket) {
  const existingTickets = listAllTickets();

  // Add the new ticket to the list
  existingTickets.push(newTicket);

  // Convert the array to a string and save it to tickets.mjs
  const ticketsString = `export default ${JSON.stringify(
    existingTickets,
    null,
    2
  )};`;
  fs.writeFileSync("./mock/tickets.mjs", ticketsString, "utf-8");
}

//Specific ticket
app.get("/api/ticket/:id", (req, res) => {
  const ticket = getTicketDetails(+req.params.id);
  res
    .status(200)
    .json({ status: "Success", statusCode: 200, data: ticket ?? null });
});

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
