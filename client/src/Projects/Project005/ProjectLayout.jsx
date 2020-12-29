import React from 'react';
import './Project.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard'
//import Home from './Home'
function ProjectLayout(Props) {
    return (
        <div>
            <Header/>
            <Dashboard/>
          
            <Footer/>
        </div>
    )
}

export default ProjectLayout;
