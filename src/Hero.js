import "./Hero.css";
import heroJpg from "./img/heroJpg.jpg";

function Hero() {
  return (
    <div className="hero container">
      <div className="header">
        <h1>
          Denis
          <br />
          Novik
        </h1>
        <p className="hero-p">
          UX | UI designer
          <br />
          24 years old, Minsk
        </p>
        <div className="toggle">
          <a href="#">RU</a> |{" "}
          <a className="active" href="#">
            ENG
          </a>
        </div>
      </div>
      <img src={heroJpg} />
    </div>
  );
}

export default Hero;
