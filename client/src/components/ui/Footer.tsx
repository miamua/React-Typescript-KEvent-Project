type FooterProps = {
  text: string;
};

const Footer = ({ text }: FooterProps) => {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;
