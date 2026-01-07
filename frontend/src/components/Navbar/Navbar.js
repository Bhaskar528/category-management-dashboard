import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="logo"
          className="logo"
        />
        <span className="brand">fastcart</span>
      </div>

      <div className="nav-center">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-right">
        <FiBell />
        <FiMessageSquare />

        <div className="profile">
          <div className="avatar">C</div>
          <span>Bhaskar</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
