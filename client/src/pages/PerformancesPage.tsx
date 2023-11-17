import { type ReactNode, useEffect, useState } from "react";
import Header from "../components/ui/Header";
import { IPerformers } from "../components/performace/IPerformers";
import { get } from "../utilities/httpClient";
import Progress from "../components/ui/Progress";
import ErrorMessage from "../components/ui/ErrorMessage";
import Performer from "../components/performace/Performer";
import { IPerformanceResponseType } from "../utilities/IPerformanceResponseType";

/*
type ActivityResponseType = {
  status: string;
  statusCode: number;
  items: number;
  data: IPerformers[];
};*/

const PerformancesPage = () => {
  const [performances, setPerformances] = useState<IPerformers[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getAllPerformances = async () => {
      try {
        setIsLoading(true);
        const result = await get<IPerformanceResponseType>(
          "http://localhost:3000/api/performances"
        );
        setPerformances(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };
    getAllPerformances();
  }, []);

  let content: ReactNode;

  if (performances) {
    content = (
      <section className="artist-gallery">
        {performances.map((performance) => (
          <div key={performance.id}>
            <Performer
              imgUrl={performance.imgUrl}
              group={performance.group}
              id={performance.id}
            />
          </div>
        ))}
      </section>
    );
  }

  if (isLoading) {
    content = <Progress text="Collecting data..." />;
  }

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  return (
    <article className="container">
      <Header>
        <h2>All Activites</h2>
        <p>What's happening?</p>
      </Header>
      {content}
    </article>
  );
};

export default PerformancesPage;
