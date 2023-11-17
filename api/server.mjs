import express from "express";
import cors from "cors";

import {
  eventDetail,
  getPerformance,
  listAllActivities,
} from "./mock/event.mjs";

const app = express();

app.use(cors());

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

const port = 3000;
app.listen(port, () =>
  console.log(`Server is up and running on port: ${port}`)
);
