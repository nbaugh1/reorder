

export const itemsReducer = (state={
    
    items: [],
    loading: false,
    itemsLoaded: false

}, action) => {
    switch(action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.items,
                loading: false,
                itemsLoaded: true
            }
            

        case "LOADING_ITEMS":
            return{
                ...state,
                loading: true
            }
            
            default:
                return state;
    }
}

