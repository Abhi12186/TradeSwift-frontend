import React from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg border-bottom" 
      style={{backgroundColor: "#fff"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
          
<svg xmlns="http://www.w3.org/2000/svg" 
  width="300" height="80" viewBox="0 0 300 80">
 
  <rect x="10" y="40" width="10" height="30" fill="#0073e6" />
  <rect x="30" y="30" width="10" height="40" fill="#0073e6" />
  <rect x="50" y="20" width="10" height="50" fill="#0073e6" />

 
  <path d="M 10 60 Q 30 30, 70 10" fill="none" stroke="#2B2B2B" stroke-width="4" />
  <polygon points="67,8 80,15 70,17" fill="#2B2B2B" />


  <text x="100" y="50" font-family="Segoe UI, sans-serif" 
  font-size="32" fill="#2B2B2B" font-weight="600">Trade</text>
  <text x="180" y="50" font-family="Segoe UI, sans-serif" 
  font-size="32" fill="#0073e6" font-weight="500">Swift</text>
</svg>


          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
            
                <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                 Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
