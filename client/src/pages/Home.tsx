import { ReactNode, useEffect, useState } from "react";
import "./home.css";
import { ISponsor } from "../components/kpopEvent/ISponsor";
import { get } from "../utilities/httpClient";
import Progress from "../components/ui/Progress";
import ErrorMessage from "../components/ui/ErrorMessage";
import { SponsorAndContactResponseType } from "../utilities/TryResponse";
import { IContact } from "../components/kpopEvent/IContact";

const HomePage = () => {
  const [sponsors, setSponsors] = useState<ISponsor>();
  const [contactInfo, setContactInfo] = useState<IContact>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getAllSponsors = async () => {
      try {
        setIsLoading(true);
        const result = await get<SponsorAndContactResponseType>(
          "http://localhost:3000/api/event"
        );
        console.log(result.data);
        setSponsors(result.data as ISponsor);
        setContactInfo(result.data as IContact);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };
    getAllSponsors();
  }, []);

  let content: ReactNode;

  if (sponsors) {
    content = (
      <section className="">
        <div className="mainSponsor">{sponsors.sponsorship.main_sponsor}</div>
        <div className="supporting_sponsors">
          {sponsors.sponsorship.supporting_sponsors.map((sponsor) => (
            <div key={sponsor}>{sponsor} </div>
          ))}
        </div>
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
    <main>
      <article className="main-area">
        <section className="container">
          <h1 className="page-title">Välkommen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias rerum beatae mollitia magni provident ullam exercitationem
            dicta excepturi vitae! Quae cumque nesciunt temporibus libero nobis
            quis id quaerat repudiandae architecto, dolorem repellat sint
            assumenda similique nostrum? Blanditiis, quam quis.
          </p>
          <a href="/ticket" className="btn">
            BUY TICKET HERE
          </a>
        </section>
      </article>
      <article className="info-area">
        <section className="display-image"></section>
        <section className="info bg-dark">
          <h3 className="page-title">Westcoast Cars</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            explicabo deserunt qui dicta eaque quae libero illum debitis
            mollitia, molestias eveniet consequuntur provident rem a blanditiis
            recusandae ipsa. Maiores dolor laudantium assumenda qui, soluta at
            rem, incidunt eius aspernatur animi autem iure neque accusamus ut
            vero architecto consectetur illo ducimus?
          </p>
          <a href="/performances" className="btn btn-light">
            Performances
          </a>
        </section>
      </article>
      <article className="feature-area">
        <section id="sponsor" className="box bg-light">
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <h3>Sponsors</h3>
          {content}
        </section>
        <section id="leasing" className="box bg-primary">
          <i className="fa-regular fa-car-building"></i>
          <h3>Contact Us</h3>
          <p>{contactInfo?.contact_info.organizer_email}</p>
          <p>{contactInfo?.contact_info.organizer_phone}</p>
        </section>
      </article>
    </main>
  );
};

export default HomePage;
