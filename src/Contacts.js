import "./Contacts.css";
import Header from "./Header/Header";
import Paragraph from "./Paragraph/Paragraph";
import Button from "./Button/Button";
import Icon from "./Icon/Icon";
import Link from "./Link/Link";

export default function Contacts() {
  const contactItems = [
    { name: "linkedin", color: "#070707", size: 40 },
    { name: "instagram", color: "#070707", size: 40 },
    { name: "behance", color: "#070707", size: 40 },
    { name: "dribbble", color: "#070707", size: 40 },
  ];

  return (
    <div className="contacts container">
      <Header text="Contacts" />

      <div className="contacts-text">
        <Paragraph
          prelined
          text="Want to know more or just chat? 
You are welcome!"
        />
      </div>
      <Button text="Send message" />
      <div className="social">
        {contactItems.map((item) => (
          <a href="#">
            <Icon {...item} />
          </a>
        ))}
      </div>
      <div className="contacts-footer">
        <Paragraph text="Like me on" prelined />
      </div>
      <div className="contacts-footer-links">
        <Link text="LinkedIn," />
        <Link text="Instagram," />
        <Link text="Behance," />
        <Link text="Dribble" />
      </div>
    </div>
  );
}
