import React, { useEffect, useState } from 'react';


//tooltip
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'

//drawer imports
import TemporaryDrawer from '../drawer'
import Chats from '../../drawermodules/chats'
import Dashboard from '../../drawermodules/dashboard';
import Family from '../../drawermodules/family';
import Friends from '../../drawermodules/friends';
import GrandParents from '../../drawermodules/grandparents';
import Login from '../../drawermodules/login';
import Private from '../../drawermodules/private'

//Icons navbar
import { ColorLensOutlined, BusinessCenter, Telegram, Home } from '@material-ui/icons'

import {  NavLink, Link  } from "react-router-dom";

//drawer route list for map
const DrawerList = [
    { name: "Dashboard", comp: <Dashboard />, href: "/dashboard" },
    { name: "Chat", comp: <Chats />, href: "/chats" },
    { name: "Mail", comp: <Dashboard />, href: "/messages" },
    { name: "Private", comp: <Private />, href: "/private" },
    { name: "Grand Parents", comp: <GrandParents />, href: "/grandparents" },
    { name: "Family", comp: <Family />, href: "/family" },
    { name: "Friends", comp: <Friends />, href: "/friends" },
    { name: "Friends", comp: <Login />, href: "/login" },
  ]




export default function DesktopNav() {

  const [menuWhite, setMenuWhite] = useState(false)

    function displayDate(e) {

        if (window.pageYOffset > 250) {
    
          setMenuWhite(true)
        }
        else {
          setMenuWhite(false)          
        }    
      }
    
      useEffect(() => {
    
        window.removeEventListener("scroll", displayDate);
        // Update the document title using the browser API
        window.addEventListener("scroll", displayDate);
        console.log("bind nav window")
    
        return () => {
          window.removeEventListener("scroll", displayDate);
          console.log("unbind nav window")
        }
    
    
      }, []);
    
      
    return(
        <Container maxWidth="lg" className="nav--desktop">
        <div className={menuWhite ? "navbar-container nav-whitebg" :"navbar-container"}>
          <div className="navbar-items">
            <Tooltip title="Home">
              <Link to="/" className={menuWhite ? "nav-color--gray" :"nav-color--white"} ><h2 class={`h2--margin ${menuWhite ? "h2-margin" :""}`}> Shrey </h2></Link>
            </Tooltip>

            <nav className="navbar-right">

              <Tooltip title="Home">
                <IconButton aria-label="Home" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                  <NavLink 
                  activeClassName="active-link"
                  to="/home" className={menuWhite ? "nav-color--gray" :"nav-color--white"}><Home /></NavLink>
                </IconButton>
              </Tooltip>
              <Tooltip title="Portfolio">
                <IconButton aria-label="Portfolio" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                  <NavLink 
                  activeClassName="active-link"
                  to="/portfolio" className={menuWhite ? "nav-color--gray" :"nav-color--white"}><BusinessCenter /></NavLink>
                </IconButton>
              </Tooltip>
              <Tooltip title="About Me">
                <IconButton aria-label="About Me" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                  <NavLink 
                  activeClassName="active-link"
                  to="/about" className={menuWhite ? "nav-color--gray" :"nav-color--white"}>Me</NavLink>
                </IconButton>
              </Tooltip>
              <Tooltip title="Contact Me">
                <IconButton aria-label="Contact Me" className={menuWhite ? "nav-btn-hover--gray" :"nav-btn-hover--white"} >
                  <NavLink 
                  activeClassName="active-link"
                  to="/contact" className={menuWhite ? "nav-color--gray" :"nav-color--white"}><Telegram /></NavLink>
                </IconButton>
              </Tooltip>
              {/*<TemporaryDrawer />*/}
            </nav>
          </div>
        </div>
      </Container>

    );
}