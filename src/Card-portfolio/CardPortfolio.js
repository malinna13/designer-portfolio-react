import "./CardPortfolio.css";

export default function CardPortfolio({ src, text }) {
  return (
    <div className="portf-card">
      <img src={src} />
      <a className="portf_link" href="#">
        {text}
      </a>
    </div>
  );
}
