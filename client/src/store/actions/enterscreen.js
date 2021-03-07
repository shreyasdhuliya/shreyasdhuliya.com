
import {GET_ES_BG, GET_ES_LINKS,SET_ALERT, REMOVE_ALERT } from './types';

import {RDB} from '../../api/firebase';
import {setAlert} from './alert';
import {v4 as uuidv4} from 'uuid';


//get enter screen background image
export const getEsBg = () =>  dispatch => {
    
    //get image src from firebase
    RDB.ref('enter/backgroundimages').once('value').then( snap => {           
        let resData = snap.val();
        //if no background image return alert error
        if(resData == null || resData == undefined)
            {
                resData = {}
                const msg = "No background image to display";
                const alertType = 'error';
                const idNoBg = uuidv4();
        
                dispatch({
                    type: SET_ALERT,
                    payload:{msg, alertType, idNoBg}
                })
                setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
            }
        dispatch({
            type: GET_ES_BG,
            payload: resData
        })        
    })
    
}

//get social links
export const getEsLinks = () => dispatch => {
    RDB.ref('enter/').once('value').then( snap => {
        let resData = snap.val();
        //if no background image return alert error
        if(resData == null || resData == undefined)
            {
                resData = {}
                const msg = "No social links to display";
                const alertType = 'error';
                const idNoBg = uuidv4();
        
                dispatch({
                    type: SET_ALERT,
                    payload:{msg, alertType, idNoBg}
                })
                setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
            }
        dispatch({
            type: GET_ES_LINKS,
            payload: resData
        }) 
    })
}