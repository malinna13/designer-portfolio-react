import "./CardSkills.css";

export default function CardSkills({ src, text, stars }) {
  return (
    <div className="card_skills">
      <img className="skill_logo" src={src} />
      <p>{text}</p>
      <img src={stars}></img>
    </div>
  );
}
