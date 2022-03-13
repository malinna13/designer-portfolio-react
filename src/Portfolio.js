import "./Portfolio.css";
import Header from "./Header/Header";
import CardPortfolio from "./Card-portfolio/CardPortfolio";
import port1 from "./img/portf1.jpg";
import port2 from "./img/portf2.jpg";
import port3 from "./img/portf3.jpg";

const portfolio = [
  { src: port1, text: "Online fashion store - Homepage" },
  { src: port2, text: "Reebok Store - Concept" },
  { src: port3, text: "Braun Landing Page - Concept" },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Header text="Portfolio" />
      <div className="portfolio-cards container">
        {portfolio.map((item) => (
          <CardPortfolio src={item.src} text={item.text} />
        ))}
      </div>
    </div>
  );
}
