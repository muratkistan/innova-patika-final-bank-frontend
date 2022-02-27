import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
      
    <header className="header-area header-sticky wow slideInDown md-5" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
         
              <a href="/" className="logo">
                <h4>Innova Bank <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-bank-fintech-itim2101-lineal-color-itim2101.png"/></h4>
              </a>
          
              <ul className="nav">
                <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
            
                <li className="scroll-to-section"><a href="/credits">Credits</a></li>
                <li className="scroll-to-section"><a href="/customers">Customers</a></li> 
                <li className="scroll-to-section"><a href="/sorgu">Search</a></li> 
                <li className="scroll-to-section"><a href="/addCredit">Apply Credit</a></li>
                <li className="scroll-to-section"><div className="main-blue-button"><a href="/add">CREATE A BANK ACCOUNT</a></div></li>
 
              </ul>        
              <a className='menu-trigger'>
                  <span>Menu</span>
              </a>
              
            </nav>
          </div>
        </div>
      </div>
      
    </header>

        
    );
};

export default Header;