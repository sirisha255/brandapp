import React from 'react'

function Header() {
  return (
    <div>
     <nav  appearance="inverse" style={{backgroundColor:"seagreen"}}className="navbar navbar-expand-lg navbar-dark"> 
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a href="/" className="navbar-brand">Brand Transparency</a>

            </li>
        
            <li>
                <a href="/contact" className="navbar-brand">Contact</a>
            </li>
            <li>
                <a href="/productCrud" className="navbar-brand">Product</a>
            </li>
            <li>    
                <a href="/about" className="navbar-brand">About</a>
            </li>
                        
            <li>
            
              <button onClick="login" className="btn btn-primary" ><a href="/login" className="navbar-brand">Login</a></button>
      
            </li>
    
          

        </ul>
        
    </nav>
   
   


    </div>
  );
}

export default Header