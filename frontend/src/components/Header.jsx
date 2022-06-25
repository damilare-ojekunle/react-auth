import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/">GoalSetter</Link>
        </div>
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
