import { Background } from "react-parallax";
import {Parallax} from 'react-parallax'
import Typography from '@material-ui/core/Typography'

import './index.css'

export default function CommonBg(props) {

    return (
        <>
  
    <div className="info-body" style={{top:props.top}}>
        <div className="info-body-top enter-white-bg">
               {props.children}
        </div>
    </div>

        </>
    );

}