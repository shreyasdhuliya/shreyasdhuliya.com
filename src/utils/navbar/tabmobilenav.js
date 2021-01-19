import React, { useEffect } from 'react';

//tooltip
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

//Icons navbar
import { ColorLensOutlined, BusinessCenterOutlined, Telegram, Home } from '@material-ui/icons'

import {  Link, NavLink  } from "react-router-dom";

export default function TabMobileNav() {

    return(

        <>
    <Container maxWidth="lg" className="nav--tabmobile">
        <div className={"navbar-container nav-whitebg"}>
          <div className="navbar-items">
            <Tooltip title="Home">
              <Link to="/" className=" nav-color--gray" ><h4 className="nav-name h2-margin"> Shrey </h4></Link>
            </Tooltip>

            <nav className="navbar-right">
             
              <Tooltip title="Contact Me">
                <IconButton aria-label="Contact Me" className="nav-btn-hover--gray " >
                  <Link to="/contact" className="nav-color--gray"><Telegram /></Link>
                </IconButton>
              </Tooltip>
              {/*<TemporaryDrawer />*/}
            </nav>
          </div>
        </div>
        <div className={"navbar-container--btm nav-whitebg"}>
            <div style={{display:"flex", flexDirection:"row", height:"100%"}}>
                <div  style={{ display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}>
                <NavLink 
                activeClassName="active-link"
                to="/home" className="nav-color--gray"><Home /></NavLink>
                </div>
                <div  style={{ display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}>
                <NavLink 
                activeClassName="active-link"
                to="/portfolio" className="nav-color--gray"><BusinessCenterOutlined /></NavLink>
                </div>
                <div  style={{ display:"flex", alignItems:"center", justifyContent:"center",  flex:"1 1 auto"}}>
                <NavLink 
                activeClassName="active-link"
                to="/about" className="nav-color--gray">Me</NavLink>
                </div>

                
                
                  
            </div>

        </div>
    </Container>
      </>
    );

}