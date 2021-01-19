
//social  media font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons"

//material UI
import  IconButton  from  '@material-ui/core/IconButton'

//react
import { useState } from 'react'

//firebase
//import { FirebaseContext } from '../../../firebase';

//import css
import './index.css'


export default function SocialLinks() {


    const redirectOnClick = (href) => {
        window.location.href = href
    }

    const [links, setLinks] = useState({})


    return(
        <div style={{marginTop:'20px',marginBottom:"10px", width:"100%", display:"flex", flexDirection:"row" ,justifyContent:"center"}}>
        <IconButton className="nocolor--focus" style={{marginRight:"7px"}}  onClick={() => redirectOnClick(links.facebook)}>
          <FontAwesomeIcon icon={faFacebook} style={{color:"#4267B2", width:"24px", height:"24px"}} />
        </IconButton>
        <IconButton className="nocolor--focus" style={{marginRight:"7px"}}  onClick={() => redirectOnClick(links.instagram)}>
         <FontAwesomeIcon icon={faInstagram} style={{color:"#E1306C", width:"24px", height:"24px"}} />
        </IconButton>
        <IconButton className="nocolor--focus" style={{marginRight:"7px"}}  onClick={() => redirectOnClick(links.github)}>
         <FontAwesomeIcon icon={faGithub} style={{color:"#211f1f", width:"24px", height:"24px"}} />
        </IconButton>
        <IconButton className="nocolor--focus" style={{marginRight:"7px"}}  onClick={() => redirectOnClick(links.behance)}>
         <FontAwesomeIcon icon={faBehance} style={{color:"#053eff", width:"24px", height:"24px"}} />
        </IconButton>
        <IconButton className="nocolor--focus" onClick={() => redirectOnClick(links.linkedin)}> 
         <FontAwesomeIcon icon={faLinkedin} style={{color:"#0e76a8", width:"24px", height:"24px"}} />
        </IconButton>

         {/*firebase ----------------------------------------------------------------------------- 
         <FirebaseContext.Consumer>
                {firebase => {

                    firebase.rdb.ref('enter/').once('value', snap => {
                        if(Object.keys(links).length == 0)
                        {
                            console.log(snap.val())
                            setLinks(snap.val());
                        }

                    })
                }}

            </FirebaseContext.Consumer>*/}
    </div>
        );
}