import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Link} from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import { navLinks, mobile_nav, footer_nav} from './navData';
import './nav.css'

const Navbar = () => {
     const location = useLocation();
     const [ active, setActive ] = useState("");
   
     if (location.pathname === "/") {
       return null;
     }
   
     return (
       <nav className="navbar">
         <Link to="/home" className="nav-logo desktop">
          Mandalar May <BiMap  className='map-icon' />
         </Link>
         <form action="" className="mobile">
          <input type="text" placeholder='Search your dream house'  className='search_input' />
         </form>
         <ul className="nav-menu desktop">
          { navLinks.map((link) => (
               <li className={ `${ active === link.title ? "active" : "nav-items"}`} key={link.id} onClick={() => setActive(link.title)}>
                    <Link to={link.path} className="nav-link">{link.title}</Link>
               </li>
          ))}
          <button className="signup-btn"><Link to="/signup" className="nav-link">Sign up</Link></button>
         </ul>
         
         <ul className="mobile-nav-menu mobile">
          { mobile_nav.map((link) => (
               <li className={ `${ active === link.title ? "active" : "nav-items"}`} key={link.id} onClick={() => setActive(link.title)}>
                    <Link to={link.path} className="nav-link">{link.title}</Link>
               </li>
          ))}
         </ul>

         <ul className="footer_nav mobile">
         {
        footer_nav.map((item) => (
          <li className={item.className} key={item.id}>
            <Link to={item.path} className={item.linkcss}>
              {item.icon}
            </Link>
          </li>
        ))
      }
         </ul>

       </nav>
     );
   };
   
export default Navbar;