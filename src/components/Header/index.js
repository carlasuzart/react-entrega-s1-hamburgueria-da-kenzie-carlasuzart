import logo from "./img/logo.svg";
import "./style.css";
function Header({ showProducts }) {
  return (
    <div className="container__header">
      <div className="container__header--logo">
        <img className="logo" src={logo} alt="Burguer Kenzie" />
      </div>
      <div className="container__header--input">
        <input
          className="header__input--text"
          onChange={(event) => showProducts(event.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
        <button className="header__input--button">Pesquisar</button>
      </div>
    </div>
  );
}
export default Header;
