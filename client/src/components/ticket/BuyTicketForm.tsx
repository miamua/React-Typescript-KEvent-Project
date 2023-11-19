import { type FormEvent, useRef, useState, useEffect } from "react";
import { get, post } from "../../utilities/httpClient";
import { ITicketResponseType } from "../../utilities/ITicketResponseType";

type Customer = {
  id: unknown;
  firstName: string;
  lastName: string;
  email: string;
  ticketType: string;
  phoneNumber: string;
};

const BuyTicketForm = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const ticketType = useRef<HTMLSelectElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);

  const [customerIdCounter, setCustomerIdCounter] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const customer: Customer = {
      id: customerIdCounter,
      firstName: firstName.current!.value,
      lastName: lastName.current!.value,
      email: email.current!.value,
      ticketType: ticketType.current!.value,
      phoneNumber: phoneNumber.current!.value,
    };
    setCustomerIdCounter((prevCounter) => prevCounter + 1);

    event.currentTarget.reset();
    //Informationen skickas till vår database eller
    //till mottagaren via ett mejl api
    console.log(customer);
    postTicket(customer);
  };

  const postTicket = async (customer: object) => {
    try {
      const result = await post<ITicketResponseType>(
        "http://localhost:3000/api/tickets",
        customer
      );
      console.log("API Response:", result);
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="ticketType">Select Ticket Type:</label>
      <select ref={ticketType} id="ticketType" name="ticketType">
        <option value="general">General Admission</option>
        <option value="vip">VIP</option>
      </select>

      <label htmlFor="firstName">Full Name:</label>
      <input
        ref={firstName}
        type="text"
        id="fullName"
        name="fullName"
        required
      />

      <label htmlFor="lastName">Full Name:</label>
      <input
        ref={lastName}
        type="text"
        id="fullName"
        name="fullName"
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
  );
};

export default BuyTicketForm;
