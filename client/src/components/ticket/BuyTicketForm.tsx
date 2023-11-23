import { type FormEvent, useRef, useState } from "react";
import { post } from "../../utilities/httpClient";
import { ITicketResponseType } from "../../utilities/ITicketResponseType";
import Header from "../ui/Header";
import QRCode from "qrcode.react";

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ticketType: string;
  phoneNumber: string;
};

const getHighestTicketId = async () => {
  let highestId = 0;
  const data = await fetch("http://localhost:3000/api/tickets");
  const tickets = await data.json();
  tickets.data.forEach((ticket: { id: number }) => {
    if (ticket.id > highestId) {
      highestId = ticket.id;
    }
  });
  return highestId + 1;
};

const BuyTicketForm = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const ticketType = useRef<HTMLSelectElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const [ticketInfo, setTicketInfo] = useState<Customer | null>(null);
  const [qrCodeData, setQRCodeData] = useState<string | null>(null);

  const clearFormFields = () => {
    if (firstName.current) firstName.current.value = "";
    if (lastName.current) lastName.current.value = "";
    if (email.current) email.current.value = "";
    if (ticketType.current) ticketType.current.value = "general";
    if (phoneNumber.current) phoneNumber.current.value = "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const highestId = await getHighestTicketId();
    const customer: Customer = {
      id: highestId,
      firstName: firstName.current!.value,
      lastName: lastName.current!.value,
      email: email.current!.value,
      ticketType: ticketType.current!.value,
      phoneNumber: phoneNumber.current!.value,
    };

    const customerData = JSON.stringify(customer);
    setQRCodeData(customerData);
    //Informationen skickas till vår database eller
    //till mottagaren via ett mejl api
    postTicket(customer);
    clearFormFields();
  };

  const postTicket = async (customer: object) => {
    try {
      const result = await post<ITicketResponseType>(
        "http://localhost:3000/api/tickets",
        customer
      );
      setTicketInfo(customer as Customer);
      console.log("API Response:", result);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      {ticketInfo ? (
        <div>
          <Header>
            <h2>Your Ticket</h2>
          </Header>

          <div className="ticketDiv">
            <section>
              {" "}
              <p>
                Name: {ticketInfo.firstName} {ticketInfo.lastName}
              </p>
              <p>Email: {ticketInfo.email}</p>
              <p>Ticket Type: {ticketInfo.ticketType}</p>
              <p>Phone Number: {ticketInfo.phoneNumber}</p>
            </section>
            <section>{qrCodeData && <QRCode value={qrCodeData} />}</section>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="page-title">Buy Ticket</h1>

          <form className="ticketForm" onSubmit={handleSubmit}>
            <label htmlFor="ticketType">Select Ticket Type:</label>
            <select ref={ticketType} id="ticketType" name="ticketType">
              <option value="General Admission">
                General Admission - 500kr
              </option>
              <option value="VIP">VIP - 1200kr</option>
            </select>

            <label htmlFor="firstName">First Name:</label>
            <input
              ref={firstName}
              type="text"
              id="firstName"
              name="firstName"
              required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              ref={lastName}
              type="text"
              id="lastName"
              name="lastName"
              required
            />

            <label htmlFor="email">Email:</label>
            <input ref={email} type="email" id="email" name="email" required />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              ref={phoneNumber}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
            />

            <button type="submit">Buy Ticket</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BuyTicketForm;
