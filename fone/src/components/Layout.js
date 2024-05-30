import { Link, Outlet } from "react-router-dom";
import './Layout.css'; // Import the external CSS file

const Layout = () => {
  return (
    <>
      <Link to="/" className="Link">Home</Link>
      <Link to="/dashboard" className="Link">Dashboard</Link>
      <Link to="/registerform" className="Link">RegisterForm</Link>
      <Link to="/loginform" className="Link">LoginForm</Link>
      <Link to="/loginform">Logout</Link>

      <div className="Container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
