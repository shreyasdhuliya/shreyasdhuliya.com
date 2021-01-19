
import { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'

//import {FirebaseContext } from '../../../firebase'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles({
    inputStyle: {
      width:"60vw",
      marginBottom:"20px"
    },
    root: {
        width:"80vw", height:"auto", backgroundColor:"white", position:"absolute", top:"90px", left:"10vw",
     borderRadius:"20px", padding:"30px", marginBottom:"50px"
    }
  });



export default function AddArt()  {    

    const classes = useStyles(); 
   const { register, handleSubmit, watch, errors } = useForm();
   const red={color:'red'};
   const alertStyle = {position:"fixed", width:"60vw", bottom:"100px",left:"50%", transform:"translateX(-50%)"}

   const [btnDisable, setBtnDisable] = useState(false);
   const [successAlert, setSuccessAlert ] = useState({show:false, message:""})
   const [errorAlert, setErrorAlert ] = useState({show:false, message:""})


return(
    <>
     <div>h</div>
    {/*<FirebaseContext.Consumer>
    {firebase => {

    function onSubmit() {
         
        //disable submit button
        setBtnDisable(true)

        //check if record exists
        firebase.db.collection('thumbnails').doc('chinnu').get().then(record => {
            if(!record.exists){
                //create record
                console.log("create")
                setBtnDisable(false)
            }
            else{
                //show errormessage
                setErrorAlert({show:true, message:"record already exists "})
                setTimeout(() => {  setErrorAlert({show:false, message:""})},1000)
                console.log("record exists")
                setBtnDisable(false)
            }
            
        })
        

        console.log(watch("thumbnail"))
        //firebase.db.collection('thumbnails').doc('chinnu').get().then(res => console.log(res.data()))
    }

    return(

        <>
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        
        <table>

            <tr>
                <td>thumbnail:</td>
                <td>
                {errors.thumbnail && <span style={red}>thumbnail src is required<br/></span>}
                <input id="thumbnail" name="thumbnail" ref={register({ required: true })} className={classes.inputStyle} />
                
                </td>
            </tr>

            <tr>
                <td>title:</td>
                <td> <input id="title" name="title" ref={register} className={classes.inputStyle} /> </td>
            </tr>
            <tr>
                <td>Unique Key:</td>
                <td>
                {errors.key && <span style={red}>unique key is required<br/></span>}
                <input id="key" name="key" ref={register}  ref={register({ required: true })}  style={{marginBottom:"20px"}} />
               
                </td>
            </tr>

            <tr>
                <td>Display order:</td>
                <td>
                {errors.displayorder && <span style={red}>unique key is required<br/></span>}
                <input type="number" id="displayorder"  name="displayorder"  ref={register({ required: true })}   style={{marginBottom:"20px"}}   />
               
                </td>
            </tr>
            <tr>
                <td>Images(next line):</td>
                <td>
                {errors.images && <span style={red}>unique key is required<br/></span>}
                <textarea  id="images" name="images"   ref={register}  ref={register({ required: true })}  className={classes.inputStyle} />
               
                </td>
            </tr>
            <tr>
                <td>DEscription:</td>
                <td>
                <textarea id="description" name="description"  ref={register} className={classes.inputStyle} />
                </td>
            </tr>
            <tr>
                <td>Category</td>
                <td>
                {errors.category && <span style={red}>category is required<br/></span>}
                <input id="category" name="category"ref={register({ required: true })}  className={classes.inputStyle} />
                
                </td>
            </tr>
            <tr>
                <td>tags(comma sep):</td>
                <td>
                {errors.tags && <span style={red}>tags are required(comma separated)<br/></span>}
                <input  id="tags"  name="tags"  ref={register({ required: true })} className={classes.inputStyle} />
           
                </td>
            </tr>

           
        </table>


        <button disabled={btnDisable}>Add Artwork</button> 


       
        </form>

            { errorAlert.show ? <Alert  style={alertStyle} severity="error">  {errorAlert.message}   </Alert> : "" }
                                    
            </>
    );
        }} 

    </FirebaseContext.Consumer>   */}
    </>
    ); 





}