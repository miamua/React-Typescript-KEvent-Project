import { ReactNode, useEffect, useState } from "react";
import { IPerformanceDetail } from "../components/performace/IPerformanceDetail";
import { get } from "../utilities/httpClient";
import { useParams } from "react-router-dom";
import { IPerformanceDetailResponseType } from "../utilities/IPerformaceDetailResponseType";
import Progress from "../components/ui/Progress";
import ErrorMessage from "../components/ui/ErrorMessage";
import Header from "../components/ui/Header";
import PerformanceDetails from "../components/performace/PerformaceDetails";

/*
type PerformaceResponseType = {
  status: string;
  statusCode: number;
  data: IPerformaceDetail;
};*/

const PerformanceDetail = () => {
  const [performance, setPerformance] = useState<IPerformanceDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const params = useParams();

  useEffect(() => {
    const getPerformance = async () => {
      try {
        setIsLoading(true);
        const result = await get<IPerformanceDetailResponseType>(
          `http://localhost:3000/api/performance/${params.id}`
        );
        setPerformance(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };
    getPerformance();
  }, [params.id]);

  let content: ReactNode;

  if (performance) {
    content = <PerformanceDetails performance={performance} />;
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
        <h2>{performance?.group}</h2>
      </Header>
      {content}
    </article>
  );
};

export default PerformanceDetail;
