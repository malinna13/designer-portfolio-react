import "./Paragraph.css";

export default function Paragraph({ text, prelined = false }) {
  const itemClass = prelined ? "prelined" : "";

  return <p className={itemClass}>{text}</p>;
}
