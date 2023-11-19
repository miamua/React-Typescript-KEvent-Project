import BuyTicketForm from "../components/ticket/BuyTicketForm";
import "./ticketPage.css";

const TicketPage = () => {
  return (
    <main>
      <article>
        <section id="buying-form">
          <h1 className="page-title">Buy Ticket</h1>
          <BuyTicketForm />
        </section>
      </article>
    </main>
  );
};

export default TicketPage;
