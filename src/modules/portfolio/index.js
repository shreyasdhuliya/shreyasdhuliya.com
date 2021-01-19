
//import bg images
import bgImage from '../../utils/images/shreya.jpg'

//background
import WhiteBackground from '../../utils/whitebackground'

//import material ui components
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//material ui icons
import Laptop from '@material-ui/icons/Laptop'
import Equalizer from '@material-ui/icons/Equalizer'
import Palette from '@material-ui/icons/Palette'

import Develper from './developer'
import Artwork from './artwork'
import RightStepper from '../../utils/rightstepper'



//react router
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const useStyles = makeStyles({
  selectedTab: {
    color:"white",
    background:'#9c27b0',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14)'
  }
})


function Portfolio() {

  const classes = useStyles();

  let rightStepperInfo=[
    {id:"commision", tooltip:"Commision" },
    {id:"portrait", tooltip:"Portraits" },
    {id:"workshop", tooltip:"Workshops" },
    {id:"clay", tooltip:"Clay Sculptures" },
    {id:"product", tooltip:"products" },
    {id:"artcraft", tooltip:"Art and Craft" },
    {id:"others", tooltip:"Ealier works" },
                      ]

  return (

    <>

    { window.location.pathname == "/portfolio/artwork" ? <RightStepper detail={rightStepperInfo} /> :""}

    <Typography variant="h3" style={{fontWeight:"medium"}} className="profile-info" >Portfolio</Typography>   

    <WhiteBackground  top={"390px"}>
                <Typography variant="body1">TExt here</Typography>

      <AppBar position="static" color="default" style={{background:"white",width:"100%", alignItems:"center", boxShadow:"none"}}>
        
        <Tabs
          indicatorColor="none"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{background:"white",width:"360px"}}
        >
          {/*b */}
          <NavLink to="/portfolio/developer" activeClassName={classes.selectedTab}>
          <Tab 
          style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px",  margin:"20px 0 20px 20px"}} 
          icon={<Laptop />}  label="Developer" 
        />
        </NavLink>
        <NavLink to="/portfolio/datascience" activeClassName={classes.selectedTab}>
          <Tab  
          style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px", margin:"20px 0 20px 0px"}}
           icon={<Equalizer />} label="Data Sci"
          />
          </NavLink>
          <NavLink to="/portfolio/artwork" activeClassName={classes.selectedTab}>
          <Tab 
           style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px", margin:"20px 20px 20px 0px"}}
           icon={<Palette />} 
           label="Artworks" 
            />
          </NavLink>
        </Tabs>

        <Switch>
          <Route path="/portfolio/developer">
              <Develper/>
          </Route>
          <Route path="/portfolio/datascience">
              <div> hello data scien</div>
          </Route>
          <Route path="/portfolio/artwork">      
                 <Artwork />
          </Route>
        </Switch>
      </AppBar>

      </WhiteBackground>
      </>
  );
  }

  export default Portfolio