
//css
import './index.css' 

//components
import SocialBtnGroup from './SocialBtnGroup'
import BgImg from './BgImg'

export default function EnterScreen(){ 

      
    const redirectOnClick = (href) => {
        window.location.replace(href)
    }

    return(
       <>
        {/*black background----------------------------------------- */}
        <div style={{width:"100vw", height:"100vh", position:"fixed", zIndex:"29", backgroundColor:"#D7C5B3", top:"0", left:"0"}} ></div>

        {/* background cover----------------------------------------- */}
        <BgImg />

        {/* button group----------------------------------------- */}
        <SocialBtnGroup />           
       </>
    );

}