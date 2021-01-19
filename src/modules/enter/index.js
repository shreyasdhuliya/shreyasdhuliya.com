
//css
import './index.css' 

//components
import CusButtonGroup from './buttongroup'
import EnterBgImg from './backgroundimg'

export default function EnterScreen(){ 

      
    const redirectOnClick = (href) => {
        window.location.replace(href)
    }

    return(
        <>
        {/*black background----------------------------------------- */}
        <div style={{width:"100vw", height:"100vh", position:"fixed", zIndex:"29", backgroundColor:"white", top:"0", left:"0"}} ></div>

        {/* background cover----------------------------------------- */}
        <EnterBgImg />

        {/* button group----------------------------------------- */}
        <CusButtonGroup />
           
       </>
    );

}