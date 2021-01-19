import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


import ProfilePromt from '../../../utils/profilepromt'




import {MusicList} from './favlist'

export default function FavMusic(){

 
    return (
        <>
        
        <Grid item xs={12} sm={12} md={6} style={{padding:"10px"}}  >

           <ProfilePromt height="75px" btmLabel="Music" />
            <div style={{marginTop:"20px"}}>
           { MusicList.map((item, index) => (
           <Chip  
           key={index}
            avatar={<Avatar alt="Natacha" src={item.image} style={{ marginLeft:"0", width:"35px",height:"35px"}}/>}
            label={item.name}
            style={{marginTop:"10px", marginRight:"10px"}}   />
            ))
            }
            </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} style={{padding:"10px"}}  >

            <ProfilePromt height="75px" btmLabel="Movies" />
            <div style={{marginTop:"20px"}}>
            { MusicList.map((item, index) => (
            <Chip  
            key={index}
            avatar={<Avatar alt="Natacha" src={item.image} style={{ marginLeft:"0", width:"35px",height:"35px"}}/>}
            label={item.name}
            style={{marginTop:"10px", marginRight:"10px"}}   />
            ))
            }
            </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} style={{padding:"10px"}}  >

            <ProfilePromt height="75px" btmLabel="Sitcom" />
            <div style={{marginTop:"20px"}}>
            { MusicList.map((item, index) => (
            <Chip  
            key={index}
            avatar={<Avatar alt="Natacha" src={item.image} style={{ marginLeft:"0", width:"35px",height:"35px"}}/>}
            label={item.name}
            style={{marginTop:"10px", marginRight:"10px"}}   />
            ))
            }
            </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} style={{padding:"10px"}}  >

            <ProfilePromt height="75px" btmLabel="Food" />
            <div style={{marginTop:"20px"}}>
            { MusicList.map((item, index) => (
            <Chip  
            key={index}
            avatar={<Avatar alt="Natacha" src={item.image} style={{ marginLeft:"0", width:"35px",height:"35px"}}/>}
            label={item.name}
            style={{marginTop:"10px", marginRight:"10px"}}   />
            ))
            }
            </div>
        </Grid>

        </>

    );
}

