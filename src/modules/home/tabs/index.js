import React from 'react';
import SwipeableViews from 'react-swipeable-views';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//material ui icons
import Camera from '@material-ui/icons/Camera'
import Bookmark from '@material-ui/icons/Bookmark'
import Favorite from '@material-ui/icons/Favorite'

//custom components
import Panel from './panels';
import SetTabPanel  from './settabpanel'

const useStyles = makeStyles({
  selectedTab: {
    color:"white",
    background:'#9c27b0',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14)'
  }
})



function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
  const [tabselected, setTabselected] = React.useState([true, false, false])
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let arrBol = [false,false,false];
    arrBol[newValue] = true;
    setTabselected(arrBol);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

 

  return (
   <>
      <AppBar position="static" color="default" style={{background:"white",width:"100%", alignItems:"center", boxShadow:"none"}}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{background:"white",width:"340px"}}
        >
          {/*b */}
          <Tab 
          className={`noborder--focus ${tabselected[0] ? classes.selectedTab : ""}` } 
          style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px",  margin:"20px 0 20px 20px"}} 
          icon={<Camera />}  label="Studio" {...a11yProps(0)} 

        />

          <Tab className={`noborder--focus ${tabselected[1] ? classes.selectedTab : ""}`}  
          style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px", margin:"20px 0 20px 0px"}}
           icon={<Bookmark />} label="Bookmark" {...a11yProps(1)}
          />

          <Tab className={`noborder--focus ${tabselected[2] ? classes.selectedTab : ""}`} 
           style={{width:"100px",height:"104px",maxWidth:"100px", minWidth:"100px", borderRadius:"3px", margin:"20px 20px 20px 0px"}}
           icon={<Favorite />} label="Favorite" {...a11yProps(2)} 
     />
        </Tabs>
      </AppBar>

      {/*tab panels------------------------------------------------------------------------------------- */}
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{background:"white",maxWidth:"700px"}}  >
        <SetTabPanel value={value} index={0} >
          <Panel tab="panel1" panelname="studio"/>
        </SetTabPanel>
        <SetTabPanel value={value} index={1} >
           <Panel tab="panel1" panelname="favourite"/>
         </SetTabPanel>
        <SetTabPanel value={value} index={2} >
          <Panel tab="panel1" panelname="bookmark"/>
        </SetTabPanel>
      </SwipeableViews>
      </div>
       {/*tab panels------------------------------------------------------------------------------------- */}
    </>
  );
}
