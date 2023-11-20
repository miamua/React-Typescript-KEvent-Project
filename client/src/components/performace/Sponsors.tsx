import { FC } from "react";
import "./sponsor.css";
import { ISponsor } from "../kpopEvent/ISponsor";

type SponsorProps = {
  sponsors: ISponsor;
};

const SponsorDetails: FC<SponsorProps> = ({ sponsors }) => {
  return (
    <article className="container">
      <div className="performance-info">
        <p>{sponsors.main_sponsor}</p>
      </div>
    </article>
  );
};

export default SponsorDetails;
