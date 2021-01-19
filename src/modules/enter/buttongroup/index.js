//react
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'

//firebase
//import { FirebaseContext } from '../../../firebase';
import {RDB} from '../../../firebase'

//import material ui components
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';

//social  media font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


export default function CusButtonGroup() {


    const redirectOnClick = (href) => {
        window.location.href = href
    }

    const [links, setLinks] = useState({})

    useEffect(() => {
        RDB.ref('enter/').once('value', snap => {
                console.log(snap.val())
                setLinks(snap.val());
        })
    },[]);

    return (
        <div style={{ width: "100vw", height: "100vh", position: "fixed", top: "0", left: "0", zIndex: "31" }}>
            <Link to="/home" variant="h2" style={{ textDecoration: 'none' }}>
                <Button variant="contained" variant="outlined"
                    className="enterbtn">
                    <Typography variant="body1" style={{ letterSpacing: "4px", textTransform: "lowercase", fontSize: "20px", color: "white" }}>Enter</Typography>
                </Button>
            </Link>


            <div style={{
                marginTop: '20px', width: "100%", display: "flex", flexDirection: "row", justifyContent: "center",
                position: "absolute", bottom: "50px"
            }}>
                <IconButton className="sociallinks" onClick={() => redirectOnClick(links.facebook)}>
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "white", width: "24px", height: "24px" }} />
                </IconButton>
                <IconButton className="sociallinks" onClick={() => redirectOnClick(links.instagram)}>
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "white", width: "24px", height: "24px" }} />
                </IconButton>
                <IconButton className="sociallinks" onClick={() => redirectOnClick(links.github)}>
                    <FontAwesomeIcon icon={faGithub} style={{ color: "white", width: "24px", height: "24px" }} />
                </IconButton>
                <IconButton className="sociallinks" onClick={() => redirectOnClick(links.behance)}>
                    <FontAwesomeIcon icon={faBehance} style={{ color: "white", width: "20px", height: "20px" }} />
                </IconButton>
                <IconButton className="sociallinks" style={{ marginRight: "0" }} onClick={() => redirectOnClick(links.linkedin)}>
                    <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "white", width: "18px", height: "18px" }} />
                </IconButton>
            </div>

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