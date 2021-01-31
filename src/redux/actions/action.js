import types from '../types'

export const addTask=(task)=>{
    return{
        type:types.ADD_TASK,
        payload:task
    }
}

export const loadDetails =(index)=>{
    return {
        type:types.LOAD_DETAILS,
        payload:index

    }
}

export const addDetails =(detail,index)=>{
    return {
        type:types.ADD_DETAILS,
        payload:{detail,index}

    }
}

export const cancelDetail =()=>{
    return {
        type:types.CANCEL_DETAILS,

    }
}

export const completeTask =(index)=>{
    return {
        type:types.COMPLETE_TASK,
        payload:{index}

    }
}