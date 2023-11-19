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
          <div>
            <b>Show time:</b> {firstSchedule.time}
          </div>
          <div>
            <b>Hall:</b>
            {performance.hall}
          </div>
        </div>

        <div>
          <b>Songs:</b> {firstSchedule.songs.join(", ")}
        </div>

        <div className="description">
          <p>
            <b>Group members:</b> {performance.members.join(", ")}
          </p>
          <p>{performance.description}</p>
        </div>
      </div>
    </article>
  );
};

export default PerformanceDetails;
