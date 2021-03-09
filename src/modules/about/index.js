import React, {useState,useEffect} from 'react';

//background
import WhiteBackground from '../../utils/whitebackground'
import BasicInfo from './basicinfo.js';

import Favorite from './favmusic';
import Description from './description';
import TopLeftImg from './topleftimage'

//import material ui components
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

//utils
import RightStepper from '../../utils/rightstepper'

//firebase
import {RDB} from '../../firebase'

function About() {

    let rightStepperInfo=[
        {id:"aboutme-description", tooltip:"Description" },
        {id:"aboutme-basicinfo", tooltip:"Basic Info" },
        {id:"aboutme-favourite", tooltip:"Favourite" },
        {id:"aboutme-hobbies", tooltip:"Hobbies" },
        {id:"aboutme-connections", tooltip:"Connections" },
                          ]

    const [aboutme, setAboutMe] = useState({})

    useEffect(() => {
   
        RDB.ref('aboutme').once('value', snap => {            
                console.log(snap.val())
                setAboutMe(snap.val());
        })
      },[]);
    
    return (
        <>

        <RightStepper detail={rightStepperInfo} />         
          
        <Typography variant="h3" style={{fontWeight:"medium"}} className="profile-info" >About Me</Typography>   

        <WhiteBackground  top={"390px"}>
        
      
       <Grid container  style={{maxWidth:"700px"}}  >
          
                {/*About  me desc */}
                <Grid id="aboutme-description" item xs={12} style={{textAlign:"center", padding:"10px"}}>
                    <Description desc={aboutme["description"]}/>
                </Grid>

                {/* Left image*/}
                <Grid   item xs={12} sm={12}  md={6} style={{padding:"10px"}}>
                      <TopLeftImg imgs={aboutme["topleftimg"]} />
                  </Grid>
                  
                {/* |imge | Basic info|*/}
                <Grid  id="aboutme-basicinfo" item  xs={12} item sm={12} md={6}  style={{padding:"10px"}}>
                         <BasicInfo  info={aboutme["basic-info"]} />   
                  </Grid>

                  {/*Favourite */}
                  <Grid id="aboutme-favourite" item xs={12} style={{display:"flex", justifyContent:"center"}}>
                      <Typography variant="h5" style={{margin:"0", marginTop:"30px"}}>Favourite</Typography>
                  </Grid>
                  <Grid container item xs={12}>
                      <Favorite info={aboutme["favourite"]} />
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