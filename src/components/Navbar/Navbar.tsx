import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <Link to={"about"}>About Me</Link>
          </li>
          <li>
            <Link to={"music"}>Music</Link>
          </li>
          <li>
            <Link to={"politics"}>Politics</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
