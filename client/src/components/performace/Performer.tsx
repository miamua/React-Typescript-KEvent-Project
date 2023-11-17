import { FC } from "react";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

type PerformersProps = {
  id: number;
  group: string;
  imgUrl: string;
};

const Performer: FC<PerformersProps> = ({ id, group, imgUrl }) => {
  return (
    <Card image={{ src: imgUrl, alt: group }}>
      <p>{group}</p>

      <Link to={`/performance/${id}`} className="btn">
        More info
      </Link>
    </Card>
  );
};

export default Performer;
