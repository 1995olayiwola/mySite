import React from 'react';
//import {BrowserRouster as Router,Link} from 'react-router-dom';
import logo from './decent.png'
import './Header.css';
import {Link} from 'react-router-dom';
import { SidebarData } from "./SidebarData";



const Header = () =>{
  
    return(
      <div className="header">
       <nav className="navbar   navbar-expand-lg navbar-light bg-primary ">
      <Link to="/">  <a className="navbar-brand text-light" href="#"><img src={logo} alt="decent ventures" className="logo"/></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
           <Link to="/">   <a className="nav-link text-light p-10" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>
             <li className="nav-item">
             <Link to="/subscribe"> <a className="nav-link text-light p-10" href="#">Create POS Account</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/pos">  <a className="nav-link text-light p-10" href="#">Get POS</a></Link>
            </li>
                   <li className="nav-item">
             <Link to="/paper">   <a className="nav-link text-light p-10" href="#">Buy POS Paper</a></Link>
            </li>
                  <li className="nav-item">
            <Link to="/repair">   <a className="nav-link text-light p-10" href="#">Repair your POS</a></Link>
            </li>
            
             <li className="nav-item">
             <Link to="/chat"> <a className="nav-link text-light p-10" href="#">Chat Support</a></Link>
            </li>
            <li className="nav-item dropdown">
             <Link></Link> <a className="nav-link text-light dropdown-toggle p-10" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Service
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="dropdown-item"  >
                  <div className="list">
                  {SidebarData.map((val, key) => {
          return (
            <li
            style={{padding:'10px', margin:'10px', cursor:'pointer',display:'flex'}}
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
                 </div>
                </div>
                
              </div>
            </li>
           
          </ul>
          
        </div>
      </nav>
        </div>
    )
}
export default Header;