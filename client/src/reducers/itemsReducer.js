const initialState = {
    items: [],
    loading: false,
    itemsLoaded: false,

}

export const itemsReducer = (state={initialState}, action) => {
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

export default itemsReducer