
import './index.css'
import IconButton from '@material-ui/core/IconButton'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGithub, faBehance, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function FlipCard(props) {

    const redirectOnClick = (href) => {
        window.location.href = href
    }

    const LinkType = () => {
        switch (props.linkType) {
            case "facebook": return (
                <IconButton className="sociallinks--home" onClick={() => redirectOnClick(props.link)}>
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#3b5998", width: "24px", height: "24px" }} />
                </IconButton>);

            case "instagram": return (
                <IconButton className="sociallinks--home" onClick={() => redirectOnClick(props.link)}>
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#cd486b", width: "24px", height: "24px" }} />
                </IconButton>);

            case "behance": return (
                <IconButton className="sociallinks--home" onClick={() => redirectOnClick(props.link)}>
                    <FontAwesomeIcon icon={faBehance} style={{ color: "#053eff", width: "24px", height: "24px" }} />
                </IconButton>);

            case "github": return (
                <IconButton className="sociallinks--home"  onClick={() => redirectOnClick(props.link)}>
                    <FontAwesomeIcon icon={faGithub} style={{ color: "#4078c0", width: "24px", height: "24px" }} />
                </IconButton>);

            case "youtube": return (
                <IconButton className="sociallinks--home"  onClick={() => redirectOnClick(props.link)}>
                    <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000", width: "24px", height: "24px" }} />
                </IconButton>);

            default: return "";
        }
    }

    return (
        <div className="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.fsrc} style={{ width: "100%" }} />
                </div>
                <div class="flip-card-back" style={{ backgroundColor: props.backcolor }}>
                    <img src={props.bsrc} className="flip-back--img" />
                    <div className="flip-back--div" >
                        <span> {props.span}</span>
                        {
                            LinkType()
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}