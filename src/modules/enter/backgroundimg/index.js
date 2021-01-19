
//react
import { useState, useEffect } from 'react'

//firebase
//import { FirebaseContext } from '../../../firebase';
import {RDB} from '../../../firebase'

//material lab
import Skeleton from '@material-ui/lab/Skeleton';


export default function EnterBgImg() {


    const [bgLinks, setBgLinks] = useState({})


    useEffect(() => {
   
        RDB.ref('enter/backgroundimages').once('value', snap => {            
                console.log(snap.val())
                setBgLinks(snap.val());
        })
      },[]);
    

    return(

        <>
        { Object.keys(bgLinks).length == 0 ?
         
         <Skeleton animation="wave" style={{width:"100vw", position:"fixed", height:"100vh", zIndex:"31"}} />
         :
        <div className="enter-transition" style={{width:"100vw", position:"fixed", height:"100vh", zIndex:"30", top:"0", left:"0" ,
       backgroundColor:"gray", backgroundImage: `url(${(window.innerWidth > 1200) ? bgLinks.desktop :  bgLinks.mobile})`, backgroundPosition:"center", backgroundSize:"cover"}}>               
    

       </div>
        
       }
       {/*
       <FirebaseContext.Consumer>
        {firebase => {

            firebase.rdb.ref('enter/backgroundimages').once('value', snap => {
                if(Object.keys(bgLinks).length == 0)
                {
                    console.log(snap.val())
                    setBgLinks(snap.val());
                }

            })
        }}

    </FirebaseContext.Consumer>*/}

                </>
        
        );
}