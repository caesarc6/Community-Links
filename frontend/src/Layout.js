import { Outlet, Link } from "react-router-dom";
import logo from "./logo1.PNG";
import "./index.scss";


// layout component has
// 1. background image
// 2. logo
// 3. 
const Layout = () => {
  return (
    <>
          <nav className="
      App-link linkMenu">
        <ul className="no-bullets">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/spring23">Spring 2023</Link>
          </li>
          <li>
            <Link to="/fall22">Fall 2022</Link>
          </li>
        </ul>
      </nav>
     <div className="circle-Outline">
          <div className="circle-Animation top-Left"></div>
          <div className="circle-Animation middle-Right"></div>
          <div className="circle-Animation bottom-Left"></div>
          <div className="circle-Animation bottom-Right"></div>
        </div>

     <div className="bgImageContainer">
          <div className="backgroundImage"></div>
        </div>
     
        <div className="logoPicture">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="descriptionBox">Community Links</div>

      {/* <nav className="
      App-link linkMenu">
        <ul className="no-bullets">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Fall 2022</Link>
          </li>
        </ul>
      </nav> */}


      <Outlet />
    </>
  )
};

export default Layout;