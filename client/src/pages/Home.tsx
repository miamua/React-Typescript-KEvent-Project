import { ReactNode, useEffect, useState } from "react";
import "./home.css";
import { ISponsor } from "../components/kpopEvent/ISponsor";
import { get } from "../utilities/httpClient";
import Progress from "../components/ui/Progress";
import ErrorMessage from "../components/ui/ErrorMessage";
import { SponsorAndContactResponseType } from "../utilities/SponsorAndContactResponseType";
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

  if (sponsors && contactInfo) {
    content = (
      <article className="feature-area">
        <section className="box bg-light" id="sponsor">
          <i className="fa-solid fa-users"></i>
          <h3>
            <b>Sponsor</b>
          </h3>
          <div className="mainSponsor">
            {sponsors?.sponsorship.main_sponsor}
          </div>
          <div className="supporting_sponsors">
            {sponsors?.sponsorship.supporting_sponsors.map((sponsor) => (
              <div key={sponsor}>{sponsor} </div>
            ))}
          </div>
        </section>

        <section className="box bg-primary" id="contact">
          <i className="fa-regular fa-address-card"></i>
          <h3>
            <b>Contact Us</b>
          </h3>
          <p>{contactInfo?.contact_info.organizer_email}</p>
          <p>{contactInfo?.contact_info.organizer_phone}</p>
        </section>
      </article>
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
          <h1 className="page-title">K-pop Extravaganza 2023</h1>
          <p>
            🌟 Get ready for the ultimate K-pop spectacle at{" "}
            <strong>K-pop Extravaganza 2023</strong>! Join us on{" "}
            <strong> 16-17 December 2023</strong> at{" "}
            <strong>K-pop Arena, Seoul, South Korea</strong> for an electrifying
            night featuring chart-topping sensations like Blackpink and more!
          </p>
          <p>
            🎤 Experience the magic with dynamic group performances,
            soul-stirring solos, and immerse yourself in K-pop culture with
            interactive fan zones and exclusive merchandise. Whether you're a
            die-hard fan or a newcomer, <strong>K-pop Extravaganza 2023</strong>{" "}
            promises an unforgettable night of music, dance, and camaraderie.
          </p>
          <p>
            Secure your tickets now and let the countdown to an unparalleled
            K-pop experience begin! 🎉✨
          </p>
          <a href="/performances" className="btn btn-light">
            Performances
          </a>
          <a href="/ticket" className="btn">
            BUY TICKET HERE
          </a>
        </section>
      </article>
      {content}
    </main>
  );
};

export default HomePage;
