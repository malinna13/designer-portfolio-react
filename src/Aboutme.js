import Header from "./Header/Header";
import "./Aboutme.css";
import Paragraph from "./Paragraph/Paragraph";

export default function Aboutme() {
  return (
    <div className="aboutme">
      <Header text="About me" />
      <div className="aboutme-text">
        <Paragraph
          text="Hi, I'm Denis – UX/UI designer from Minsk.
          I'm interested in design and everything connected with it."
          prelined
        />

        <Paragraph
          text="I'm studying at courses 'Web and mobile design interfaces' in
          IT-Academy."
        />

        <Paragraph
          text="Ready to implement excellent projects
          with wonderful people."
        />
      </div>
    </div>
  );
}
