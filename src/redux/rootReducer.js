import { combineReducers } from "redux";
import taskReducer from './reducers/taskReducer';


const rootReducer = combineReducers({
    todo:taskReducer
})

export default rootReducer;