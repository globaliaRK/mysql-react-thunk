import { combineReducers } from "redux";
import getDates from './getDates'

export default combineReducers({
    dates: getDates
});