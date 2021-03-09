

import {useState, useEffect} from 'react'

import Grid from '@material-ui/core/Grid';
import FlipCard from '../../../utils/FlipCard';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

import {RDB} from '../../../api/firebase';


export default function Tabpannel1({imagesList}) {
 

    return(
            <>
            {Object.keys(imagesList).length == 0 ? 
             ("" /*<div style={{display:"flex", justifyContent:"center", minHeight:"480px", overflow:"hidden"}} >
                 <CircularProgress color="secondary" style={{marginTop:"30px"}}/>
            </div>*/)
            :
            <div  style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"480px", overflow:"hidden"}} >
                

                <Grid container spacing={3} style={{width:"500px"}}  >
                    <Grid container item  sm={6}>
                             {imagesList["left"].map((card, index) => (
                               <FlipCard 
                               key={index+"12"}
                               fsrc={card["front"]["imgurl"]} 
                               bsrc={card["back"]["imgurl"]}
                               backcolor={card["back"]["bgcolor"]} 
                               linkType={card["back"]["linktype"]}
                               span={card["back"]["span"]}
                               link = {card["back"]["link"]}
                               />
                               ) )}             
                    </Grid>

                    <Grid container item  sm={6} >
                    {imagesList["right"].map((card, index) => (
                               <FlipCard 
                               key={index+"33"}
                               fsrc={card["front"]["imgurl"]} 
                               bsrc={card["back"]["imgurl"]}
                               backcolor={card["back"]["bgcolor"]} 
                               linkType={card["back"]["linktype"]}
                               span={card["back"]["span"]}
                               link = {card["back"]["link"]}
                               />
                               ) )}  
                    </Grid>
                </Grid>
            </div>

                }
            </>
    );
}

