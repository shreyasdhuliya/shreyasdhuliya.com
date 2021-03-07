//react
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {getEsLinks} from '../../store/actions/enterscreen'
import PropTypes from 'prop-types'

//import material ui components
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';

//social  media font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


const SocialBtnGroup = ({getEsLinks,socialLinks }) => {

    const redirectOnClick = (href) => {
        window.location.href = href
    }
    useEffect(() => {
        if(Object.keys(socialLinks).length == 0){
            getEsLinks()
        }
    },[getEsLinks]);

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
                { socialLinks.facebook &&
                    <IconButton className="sociallinks" onClick={() => redirectOnClick(socialLinks.facebook)}>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "white", width: "24px", height: "24px" }} />
                    </IconButton>
                }  
                { socialLinks.instagram && 
                    <IconButton className="sociallinks" onClick={() => redirectOnClick(socialLinks.instagram)}>
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "white", width: "24px", height: "24px" }} />
                    </IconButton>
                }
                { socialLinks.github && 
                    <IconButton className="sociallinks" onClick={() => redirectOnClick(socialLinks.github)}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: "white", width: "24px", height: "24px" }} />
                    </IconButton>
                }
                { socialLinks.behance && 
                    <IconButton className="sociallinks" onClick={() => redirectOnClick(socialLinks.behance)}>
                        <FontAwesomeIcon icon={faBehance} style={{ color: "white", width: "20px", height: "20px" }} />
                    </IconButton>
                }
                { socialLinks.linkedin && 
                    <IconButton className="sociallinks" style={{ marginRight: "0" }} onClick={() => redirectOnClick(socialLinks.linkedin)}>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "white", width: "18px", height: "18px" }} />
                    </IconButton>
                }
            </div>
        </div>

    );
}

SocialBtnGroup.propTypes = {
    getEsLinks: PropTypes.func.isRequired,
    socialLinks: PropTypes.object.isRequired,
  }

const mapStateToProps = state => ({
    socialLinks: state.enterscreen.socialLinks
})

export default connect(mapStateToProps, {getEsLinks})(SocialBtnGroup)