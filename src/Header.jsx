import chefLogo from "./assets/cocinero.png";

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="Chef Logo" />
      <h3>Chef Claude</h3>
    </header>
  );
}
