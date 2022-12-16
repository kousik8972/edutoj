export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <img alt="Edutoj - menu" src="./assets/burger.png" />
      </div>

      <div className="center-text">
        Edutoj
        <br />
        <div style={{ fontSize: "18px" }}>Education to job</div>
      </div>

      <div className="menu">
        <a href="#">
          <img src="./assets/cart.jpg" />
        </a>
        <a href="#">
          <img src="./assets/pro.png" />
        </a>
      </div>
    </nav>
  );
}
