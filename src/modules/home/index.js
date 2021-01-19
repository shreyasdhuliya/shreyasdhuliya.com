import React from 'react'




//background
import WhiteBackground from '../../utils/whitebackground'
import Shortcut from './shortcut'



//import home css
import './index.css'

import Tabs from './tabs/index';
import ProfilePic from './profilepix'
import SocialLinks from './socialmediabtngroup'


function Home() {  

  console.log("hello home")

    return (
      <>
            <ProfilePic />
        <WhiteBackground  top={"320px"}>
          {/*Name ----------------------------------------------------------------------------------*/}
          <h3 className="name--h3">
                Shreyas Dhuliya
          </h3>
          {/* DEsignation -------------------------------------------------------------------------- */}
        <h6 style={{marginTop:'10px', width:"100%", display:"flex", justifyContent:"center", color:"gray"}}>
                Developer / Designer
        </h6>
        {/* Social media links---------------------------------------------------------------------- */}
        <SocialLinks/>

        {/* Studio, bookmark, fav tabs and tab panel------------------------------------------------ */}
          <Tabs  />


          {/* shortcut buttons */}
          <Shortcut/>
          </WhiteBackground>
      </>
    
     );
  }

  export default Home