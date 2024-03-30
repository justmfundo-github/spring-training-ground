import "./Header.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [display, setDisplay] = useState(path == "/" ? true : false);

  return (
    <div className="header-section">
      <h1 className="app-name">
        <Link to="/">IPL DashBoard </Link>
      </h1>
      {display && (
        <div>
          <h2>
            <p>
              A simple project than consumes database information on cricket games, scores and teams.
              <br />A java driven back end using a Spring Boot to expose data to a React front end.
              <br />
            </p>
          </h2>
        </div>
      )}
      <hr />
    </div>
  );
}

export default Header;
