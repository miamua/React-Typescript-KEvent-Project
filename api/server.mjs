import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

import {
  eventDetail,
  getPerformance,
  listAllActivities,
} from "./mock/event.mjs";
import { getTicketDetails, listAllTickets } from "./mock/listTickets.mjs";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/performances", (req, res) => {
  const activities = listAllActivities();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: activities.length,
    data: activities,
  });
});

app.get("/api/event", (req, res) => {
  const event = eventDetail();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: event.length,
    data: event,
  });
});

app.get("/api/performance/:id", (req, res) => {
  const performance = getPerformance(+req.params.id);
  res
    .status(200)
    .json({ status: "Success", statusCode: 200, data: performance ?? null });
});

app.get("/api/tickets", (req, res) => {
  const tickets = listAllTickets();
  res.status(200).json({
    status: "Success",
    statusCode: 200,
    items: tickets.length,
    data: tickets,
  });
});

app.get("/api/ticket/:id", (req, res) => {
  const ticket = getTicketDetails(+req.params.id);
  res
    .status(200)
    .json({ status: "Success", statusCode: 200, data: ticket ?? null });
});

// POST endpoint to create a new ticket
app.post("/api/tickets", (req, res) => {
  const newTicket = req.body;
  console.log(newTicket);
  saveTicket(newTicket);

  // After processing, you might want to send a response
  res.status(201).json({
    status: "Success",
    statusCode: 201,
    data: newTicket,
  });
});

function saveTicket(newTicket) {
  const existingTickets = listAllTickets();

  // Add the new ticket to the existing list
  existingTickets.push(newTicket);

  // Convert the array to a string and save it to tickets.mjs
  const ticketsString = `export default ${JSON.stringify(
    existingTickets,
    null,
    2
  )};`;
  fs.writeFileSync("./mock/tickets.mjs", ticketsString, "utf-8");
}

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
