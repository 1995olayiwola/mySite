import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      <div className="footer-group">
       <div className="container m-0 p-0 col-md-12" >
           <div className="row">
       <div className="container col-md-12 col-lg-12 ">
           
            <footer className="footer col-md-12 col-lg-12">				
<div className="container">
<div className="row">
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      About us
                    </div>	
                    <p className="white-text">
                     Click the button to know about us.
                     <button type="button" class="btn btn-primary">Know about us</button>
                    </p>
                  </div>
                  
                  
                  
                  
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Quick Links
                    </div>	
                    <div className="footer-links">
                      
                      <a href="#">
                        FAQ
                      </a>
                      <a href="#">
                        Terms &amp; conditions
                      </a>
                     
                     
                      </div>
                    
                  </div>
                  
                  
                  <div className="col-md-3 m-b-30">
                    <div className="footer-title m-t-5 m-b-20 p-b-8">
                      Support
                    </div>	
                    <div className="footer-links">
                      
                      <a href="#">
                        <Link to="/logout">Logout</Link>
                      </a>
                      
                      <a href="#">
                        Support forum
                      </a>
   
                    <div className="footer-social-links m-t-30 row">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                          <i className="fa fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      </div>
                      </div>
                      </div>
                      </div>
                   
                   </div>
                 
                
             
            </footer>
            <div className="footer-bottom">
              Copyright © 2020, All Rights Reserved
            </div>
          </div>
           </div>
</div>
</div>
    )
}

export default Footer;
