import {createStore , applyMiddleware} from "redux";

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const middleware= [thunk]


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
// const todo= rootReducer.todo
// store.subscribe(()=>{
//     localStorage.setItem('Tasks', JSON.stringify(store.getState(todo)))
//   })

export default store;