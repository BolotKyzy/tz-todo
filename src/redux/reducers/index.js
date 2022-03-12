import { combineReducers } from 'redux'
import DaysReducer from "./days-reducer";

export default combineReducers({
    days: DaysReducer
})
