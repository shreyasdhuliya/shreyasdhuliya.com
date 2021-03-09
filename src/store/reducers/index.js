import {combineReducers} from 'redux';
import alert from './alert';
import enterscreen from './enterscreen';
import homepage from './homepage'


export default combineReducers({
    alert,
    enterscreen,
    homepage
})