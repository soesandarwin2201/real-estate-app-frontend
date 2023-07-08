import React from 'react';
import { Link} from 'react-router-dom';


const Logo = () => {

  return (
    <section className="logo-section">
      <div className="logo-info">
        <h1 className="logo-header">Find Your Dream House</h1>
        <p className="logo-info-para">Find your dream house with just a few clicks.</p>
        <Link to="/home">
        <button className="explore-btn">
          Explore more
        </button>
        </Link>
        
      </div>
    </section>
  );
};

export default Logo;
