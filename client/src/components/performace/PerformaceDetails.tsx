import { FC } from "react";
import "./performaceDetails.css";
import { IPerformanceDetail } from "./IPerformanceDetail";

type PerformanceDetailProps = {
  performance: IPerformanceDetail;
};

const PerformanceDetails: FC<PerformanceDetailProps> = ({ performance }) => {
  const firstSchedule = performance.schedule[0];

  return (
    <article className="container">
      <div className="performance-info">
        <img src={performance.imgUrl} alt={performance.group}></img>
        <div className="title">{performance.group}</div>
        <div>
          <span>Group members: {performance.members.join(", ")}</span>
          <span>Show time: {firstSchedule.time}</span>
          <span>Songs: {firstSchedule.songs.join(", ")}</span>
        </div>

        <div className="description">
          <p>Description</p>
          <p>Add Description here</p>
        </div>
      </div>
    </article>
  );
};

export default PerformanceDetails;
