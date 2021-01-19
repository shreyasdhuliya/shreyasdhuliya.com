//react imports
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//navbar  imports
import HomeS from '../../modules/home'
import Portfolio from '../../modules/portfolio'
import Contact from '../../modules/contact'
import About from '../../modules/about'
import EnterScreen from '../../modules/enter'
import ViewPort from '../../modules/portfolio/artwork/viewpost'
import AddArt from '../../modules/admin/addart'


import './index.css'
import DesktopNav from './desktopnav'
import TabMobileNav from './tabmobilenav'

export default function NavBar() {
  
  return (
    <Router>

      <DesktopNav />
      <TabMobileNav/>
     
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/*Nabar routes */}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/portfolio/artwork/viewpost/:category/:post">
          <ViewPort />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/addart">
          <AddArt />
        </Route>
        <Route path="/home">
          <HomeS />
        </Route>


        {/*drawer routes 
           {DrawerList.map((listitem, index) => (
              <Route key={index} path={listitem.href}>
              {listitem.comp}
            </Route>
           ))*/}

        {/*enter screen */}
        <Route path="/">
          <EnterScreen />
        </Route>

      </Switch>

    </Router>
  );

}