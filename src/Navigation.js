import Link from "./Link/Link";
import "./Navigation.css";

function Navigation() {
  const navLinks = [
    { text: "Home", isActive: true },
    { text: "About me" },
    { text: "Skills" },
    { text: "Portfolio" },
    { text: "Contacts" },
  ];

  return (
    <div className="nav container">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <Link text={link.text} isActive={link.isActive} key={link.text} />
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
