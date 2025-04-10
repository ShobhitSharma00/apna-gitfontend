import {Link} from 'react-router-dom';
import "./navbar.css";

const Navbar=()=>{
  return <nav>
    <Link to="/">
    <div>
    <img
  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  alt="GitHub logo"
  style={{ width: "80px", height: "80px" }}
/>

    <h3>GitHub</h3>
    </div>
    </Link>
    <div>
       <Link to="/repo/create">
       <p>Create a Repository</p>
       </Link>
       <Link to="/profile">
       <p>Profile</p>
       </Link>
    </div>
  </nav>
}
export default Navbar;