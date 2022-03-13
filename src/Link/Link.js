export default function Link({ text, isActive }) {
  return (
    <li>
      <a className={isActive && "active"} href="#">
        {text}
      </a>
    </li>
  );
}
