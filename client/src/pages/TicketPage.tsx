import BuyTicketForm from "../components/ticket/BuyTicketForm";
import Header from "../components/ui/Header";
import "./ticketPage.css";

const TicketPage = () => {
  return (
    <main>
      <section className="container">
        <Header>
          <h2>Buy Ticket</h2>
        </Header>
        <article className="ticketInfo">
          <div className="ticketType">
            <section className="ticketSection">
              <h2>VIP Tickets</h2>
              <p>
                VIP tickets are the epitome of an exclusive event experience.
                Purchasing a VIP ticket not only grants you access to the main
                event but also provides a range of additional perks and
                privileges. These may include:
              </p>
              <ul>
                <li>Early access to the venue</li>
                <li>Reserved seating or designated VIP areas</li>
                <li>Complimentary food and beverages</li>
                <li>Exclusive merchandise or event souvenirs</li>
                <li>
                  Meet-and-greet opportunities with performers or speakers
                </li>
                <li>Priority parking</li>
              </ul>
            </section>
            <section className="ticketSection">
              <h2>General Admission Tickets</h2>
              <p>
                General admission tickets, on the other hand, provide access to
                the main event without the added perks of VIP treatment. These
                tickets are a great option for those who want to enjoy the event
                without the extra frills. General admission typically includes:
              </p>
              <ul>
                <li>Access to the main event area</li>
                <li>Open seating on a first-come, first-served basis</li>
                <li>Standard amenities available to all attendees</li>
                <li>
                  The opportunity to purchase food and beverages at the venue
                </li>
                <li>
                  Entry to any additional activities or performances included in
                  the event
                </li>
              </ul>
            </section>
          </div>
        </article>

        <article className="buyingContainer">
          <section id="buying-form">
            <BuyTicketForm />
          </section>
        </article>
      </section>
    </main>
  );
};

export default TicketPage;
