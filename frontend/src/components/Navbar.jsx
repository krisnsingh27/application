import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#ff4458",
      color: "white",
      gap:"5px"
    }}>
      <h3>Tinder</h3>
      <div>
        <Link style={{marginRight:"10px", color:"white", textDecoration:"none"}} to="/signup">Signup</Link>
        <Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link>
          <Link style={{color:"white", textDecoration:"none"}} to="/logout">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
