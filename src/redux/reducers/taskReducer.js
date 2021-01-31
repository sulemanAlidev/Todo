import types from '../types';
const initialState={
    Tasks:[],
    loadTask:false,
    index:'',
    details:[],
    complete:false
    
}

const taskReducer=(state=initialState,action)=>{

    switch(action.type){
        case types.ADD_TASK:
            return{
                ...state,
                Tasks:[...state.Tasks,action.payload]
            };
        case types.LOAD_DETAILS:
            return {
                ...state,
                loadTask:true,
                index:action.payload
            };
            case types.ADD_DETAILS:
                const {index,detail} =action.payload;
                
                return {
                    ...state,
                    loadTask:false,
                    index,
                    details:{...state.details,[index]:detail}
                }
            case types.CANCEL_DETAILS:
                return{
                    ...state,
                    loadTask:false
                }
            case types.COMPLETE_TASK:
                const index2 =action.payload.index;
                return{
                    ...state,
                    index:index2,
                    complete: !state.complete
                }

        default :
        return state
    }

}
export default taskReducer;