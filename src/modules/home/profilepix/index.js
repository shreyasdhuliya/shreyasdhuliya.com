import {useState, useEffect} from 'react'


import Skeleton from '@material-ui/lab/Skeleton';

//firebase
//import { FirebaseContext } from '../../../firebase';
import {RDB} from '../../../firebase'

export default function ProfilePic() {

    const [dp, setDp] = useState('')


    useEffect(()=> {
       RDB.ref('profilepic').once('value', snap => {
            console.log(snap.val())
            setDp(snap.val());
    })
    }, [])

    return(
        
        <div className="profile-image transition-dp" 
        style= {{display:"flex", justifyContent:"center", alignItems:"center"}} >
        {
            dp.length == 0 ?
            <Skeleton animation="wave" variant="circle" width={200} height={177} />
            :
            <img style={{width:"100%",height:"100%", borderRadius:"50%"}} 
            src={dp} />
        
        }
            {/*<FirebaseContext.Consumer>
        {firebase => {

            firebase.rdb.ref('profilepic').once('value', snap => {
                if(dp.length == 0)
                {
                    console.log(snap.val())
                    setDp(snap.val());
                }

            })
        }}

    </FirebaseContext.Consumer>*/}

            </div> 
        );
}