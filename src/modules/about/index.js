

//background
import WhiteBackground from '../../utils/whitebackground'
import BasicInfo from './basicinfo';
import ProfilePromt from '../../utils/profilepromt'
import Favorite from './favmusic'

//import material ui components
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';


//get images
import img2 from './basicinfo/images/tabpanel1/studio-2.76e2987e.jpg'

//utils
import RightStepper from '../../utils/rightstepper' 

function About() {

    let rightStepperInfo=[
        {id:"aboutme-description", tooltip:"Description" },
        {id:"aboutme-basicinfo", tooltip:"Basic Info" },
        {id:"aboutme-favourite", tooltip:"Favourite" },
        {id:"aboutme-hobbies", tooltip:"Hobbies" },
        {id:"aboutme-connections", tooltip:"Connections" },
                          ]

    
    return (

        <>

        <RightStepper detail={rightStepperInfo} />         
          
        <Typography variant="h3" style={{fontWeight:"medium"}} className="profile-info" >About Me</Typography>   

        <WhiteBackground  top={"390px"}>
        
      
       <Grid container  style={{maxWidth:"700px"}}  >
          
                {/*About  me desc */}
                <Grid id="aboutme-description" item xs={12} style={{textAlign:"center", padding:"10px"}}><Typography> hello description here </Typography></Grid>

                {/* Left image*/}
                <Grid   item xs={12} sm={12}  md={6} style={{padding:"10px"}}>
                      <img   src={img2} style={{width:"100%"}}/>
                  </Grid>
                {/* |imge | Basic info|*/}
                <Grid  id="aboutme-basicinfo" item  xs={12} item sm={12} md={6}  style={{padding:"10px"}}>
                                  <Typography variant="h5" style={{margin:"0", marginTop:"0px"}}>Shreyas Dhuliya, 28</Typography>
                                  <Typography variant="body1" style={{fontSize: "12px" }}>Software Developer @ Hinduja Tech, Bengaluru</Typography>

                                  <Typography variant="h6" style={{marginTop:"20px", marginBottom:"10px"}}>Basic Info</Typography>

                                  {/* chips basic info */}
                                  <BasicInfo />   

                                  {/* |prompt|*/}
                                  <ProfilePromt height="115px" topLabel="The quickest way to my heart..." btmLabel="Handmade Gifts"/>
                  </Grid>

                  {/*Favourite */}
                  <Grid id="aboutme-favourite" item xs={12} style={{display:"flex", justifyContent:"center"}}>
                      <Typography variant="h5" style={{margin:"0", marginTop:"30px"}}>Favourite</Typography>
                  </Grid>
                  <Grid container item xs={12}>
                      <Favorite />
                  </Grid>

                  {/*Hobbies */}
                  <Grid id="aboutme-hobbies" item xs={12} style={{display:"flex", justifyContent:"center"}}>
                      <Typography variant="h5" style={{margin:"0", marginTop:"30px"}}>Hobbies</Typography>
                  </Grid>

                  <Grid container item xs={12}>
                      <Favorite />
                  </Grid>

                  {/*Connections */}
                  <Grid id="aboutme-connections" item xs={12} style={{display:"flex", justifyContent:"center"}}>
                      <Typography variant="h5" style={{margin:"0", marginTop:"30px"}}>Hobbies</Typography>
                  </Grid>                  


        </Grid>


        </WhiteBackground>

        </>
    );
  }

  export default About