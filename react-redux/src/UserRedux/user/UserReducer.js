

let initialState = {
    loading : true,
    users : [],
    error : ''
}
const UserReducer = (state = initialState,action) => {
    switch(action.type){
        case 'USER_LIST_REQ' : 
         return{
            ...state,
            loading : true
        }
        case 'REQ_SUCCESS' : 
        return{
            loading : false,
            error : '',
            users : action.payLoad
        }
        case 'REQ_FAIL' :
        return{
            loading : false,
            error : action.payLoad,
            users : []
        }
        default : return state
    }
    
}

export default UserReducer