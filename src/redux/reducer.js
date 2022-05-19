const initialState = {
    data:[]
}

 const reducer = (state= initialState,action) => {
    switch(action.type){
        case "SET_USER" :
            return {
                ...state,
                data:action.poyload
            }
        case "GET_USER" :
            return {
                 ...state,
                 data:action.poyload
            }
        case "EDIT_USER" :
             return {
                   ...state,
                   data:action.poyload
             }
         case "UPDATE_USER" :
              return {
                     ...state,
                    data:action.poyload
              }
        default:
             return state;
    }

}
export default reducer;