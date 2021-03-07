
//react
import {  useEffect } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

//actions
import {getEsBg} from '../../store/actions/enterscreen'

//material lab
import Skeleton from '@material-ui/lab/Skeleton';


const EnterBgImg = ({backgroundImg, getEsBg}) => {
    
   //console.log(backgroundImg)
  
    useEffect(() => {
      //only get bg from firebase if not in redux state
        if(Object.keys(backgroundImg).length == 0){
          getEsBg()
        }
      },[getEsBg]);
    

    return(

        <>
        { Object.keys(backgroundImg).length == 0 ?
         
         <Skeleton animation="wave" style={{width:"100vw", position:"fixed", height:"100vh", zIndex:"31"}} />
         :
        <div className="enter-transition" style={{width:"100vw", position:"fixed", height:"100vh", zIndex:"30", top:"0", left:"0" ,
       backgroundColor:"gray", backgroundImage: `url(${(window.innerWidth > 1200) ? backgroundImg.desktop :  backgroundImg.mobile})`, backgroundPosition:"center", backgroundSize:"cover"}}>               
    

       </div>
        
       }
      </>
        
        );
}

EnterBgImg.propTypes = {
  getEsBg: PropTypes.func.isRequired,
  backgroundImg: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  backgroundImg:state.enterscreen.backgroundImg
})

export default connect(mapStateToProps, {getEsBg})(EnterBgImg)