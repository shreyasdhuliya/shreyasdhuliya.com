

import {useState, useEffect} from 'react'

import Grid from '@material-ui/core/Grid';
import FlipCard from '../../../../utils/flipcard';
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from '@material-ui/core/CircularProgress';

import {RDB} from '../../../../firebase';


export default function Tabpannel1(props) {

    const [imagesList, setImagesList] = useState({})

    useEffect(() => {
        RDB.ref("home/tabs/" + props.tab).once("value", snap => {
            //console.log(snap.val())

            //left and right content
            let leftGridContent = snap.val()["left"]
            let rightGridContent = snap.val()["right"]
            
            //left content in array
            let leftGridArr=[]; 
            for (let i = 0 ; i < Object.keys(leftGridContent).length; i++ ){
                leftGridArr.push(leftGridContent[Object.keys(leftGridContent)[i]])
            }

            //right content in array
            let rightGridArr=[]; 
            for (let i = 0 ; i < Object.keys(rightGridContent).length; i++ ){
                rightGridArr.push(rightGridContent[Object.keys(rightGridContent)[i]])
            }
            
            //new imageslist
            let newImagesList = {}
            newImagesList["left"] = leftGridArr;
            newImagesList["right"] = rightGridArr;

            setImagesList(newImagesList)

        })
    },[]);

    return(
            <>
            {Object.keys(imagesList).length == 0 ? 
             <div style={{display:"flex", justifyContent:"center", minHeight:"480px", overflow:"hidden"}} >
                 <CircularProgress color="secondary" style={{marginTop:"30px"}}/>
            </div>
            :
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"480px", overflow:"hidden"}} >
                

                <Grid container spacing={3} style={{width:"500px"}}  >
                    <Grid container item  md={6}>
                             {imagesList["left"].map((card, index) => (
                               <FlipCard 
                               fsrc={card["front"]["imgurl"]} 
                               bsrc={card["back"]["imgurl"]}
                               backcolor={card["back"]["bgcolor"]} 
                               linkType={card["back"]["linktype"]}
                               span={card["back"]["span"]}
                               link = {card["back"]["link"]}
                               />
                               ) )}             
                    </Grid>

                    <Grid container item  md={6} >
                    {imagesList["right"].map((card, index) => (
                               <FlipCard 
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

