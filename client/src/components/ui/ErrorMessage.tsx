import "./errormessage.css";

type ErrorProps = {
  text: string;
};

const ErrorMessage = ({ text }: ErrorProps) => {
  return (
    <aside className="error">
      <h2>Error :</h2>
      <p>{text}</p>
    </aside>
  );
};

export default ErrorMessage;
