import BuyTicketForm from "../components/ticket/BuyTicketForm";
import "./ticketPage.css";

const TicketPage = () => {
  return (
    <main>
      <article>
        <section id="buying-form">
          <BuyTicketForm />
        </section>
      </article>
    </main>
  );
};

export default TicketPage;
