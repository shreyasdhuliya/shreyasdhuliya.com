
import Chip from '@material-ui/core/Chip';


//material ui icons
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrayingHands, faMale, faWineGlassAlt, faSearch , faUserGraduate, faBriefcase, faHome, faLaptopHouse} from "@fortawesome/free-solid-svg-icons"

export default function  BasicInfo() {

    const iconLabelList =[       
        { icon:   <FontAwesomeIcon icon={faMale} style={{color:"black", marginLeft:"10px"}} /> , label:"172cm"    },
        { icon:   <FontAwesomeIcon icon={faWineGlassAlt} style={{color:"black", marginLeft:"10px"}} /> , label:"Socially"    },
        { icon:   <FontAwesomeIcon icon={faSearch} style={{color:"black", marginLeft:"10px"}} /> , label:"Relationship"    },
        { icon:   <FontAwesomeIcon icon={faUserGraduate} style={{color:"black", marginLeft:"10px"}} /> , label:"M.Des Product Design"    },        
        { icon:   <FontAwesomeIcon icon={faBriefcase} style={{color:"black", marginLeft:"10px"}} /> , label:"UI Developer"    },
        { icon:   <FontAwesomeIcon icon={faUserGraduate} style={{color:"black", marginLeft:"10px"}} /> , label:"B.Tech Comp Science"    },
        { icon:   <FontAwesomeIcon icon={faPrayingHands} style={{color:"black", marginLeft:"10px"}} /> , label:"Hindu"    },
        { icon:   <FontAwesomeIcon icon={faHome} style={{color:"black", marginLeft:"10px"}} /> , label:"From - Deheradun, UT"    },
        { icon:   <FontAwesomeIcon icon={faLaptopHouse} style={{color:"black", marginLeft:"10px"}} /> , label:"Lives - Bengaluru, KA"    },
      
    ]

    return(

        <>
        {iconLabelList.map((item, index) => (
            <Chip
            key = {index}
        icon={item.icon}
        label={item.label}
        style={{background: "#FFFF99", color:"#000", marginTop:"8px", marginRight:"5px"}}/>

        ))}
        
        </>


    );
}