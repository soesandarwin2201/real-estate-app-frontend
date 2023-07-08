import React from 'react';
import { useLocation } from "react-router-dom";
import { Link} from 'react-router-dom';
import { BiMap } from 'react-icons/bi'
import { navLinks } from './navData';
import './nav.css'

const Navbar = () => {
     const location = useLocation();
   
     if (location.pathname === "/") {
       return null;
     }
   
     return (
       <nav className="navbar">
         <Link to="/home" className="nav-logo">
          Mandalar May <BiMap  className='map-icon' />
         </Link>
         <ul className="nav-menu">
          { navLinks.map((link) => (
               <li className="nav-items" key={link.id}>
                    <Link to={link.path} className="nav-link">{link.title}</Link>
               </li>
          ))}
          <button className="signup-btn">SignUp</button>
         </ul>
       </nav>
     );
   };
   
export default Navbar;