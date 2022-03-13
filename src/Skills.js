import "./Skills.css";
import Header from "./Header/Header";
import Paragraph from "./Paragraph/Paragraph";
import CardSkills from "./Card-skills/CardSkills";
import ps from "./img/ps.png";
import ai from "./img/ai.png";
import aiStars from "./img/ai-stars.png";
import psStars from "./img/ps-stars.png";
import ae from "./img/ae.png";
import figma from "./img/figma.png";

const skills = [
  {
    src: ps,
    text: "Adobe Photoshop",
    stars: psStars,
  },
  {
    src: ai,
    text: "Adobe Illustrator",
    stars: aiStars,
  },
  {
    src: ae,
    text: "Adobe After Effects",
    stars: psStars,
  },
  {
    src: figma,
    text: "Figma",
    stars: psStars,
  },
];

export default function Skills() {
  return (
    <div className="skills container">
      <Header text="Skills" />
      <Paragraph text="I work in such programs as" />
      <div className="skills-cards">
        {skills.map((skill) => (
          <CardSkills src={skill.src} text={skill.text} stars={skill.stars} />
        ))}
      </div>
    </div>
  );
}
