import sprite from "../img/assets/symbol-defs.svg";

export default function Icon({ name, color, size }) {
  return (
    <svg fill={color} width={size} height={size}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  );
}
