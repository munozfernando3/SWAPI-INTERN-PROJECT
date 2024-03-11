import { Link } from "react-router-dom";
export const NavBar:React.FC=()=>
{
  
  return (
    <nav className="navbar"> {/* Add the navbar class here */}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/people">People</Link></li>
      <li><Link to="/starships">Ships</Link></li>
    </ul>
  </nav>
  );
}