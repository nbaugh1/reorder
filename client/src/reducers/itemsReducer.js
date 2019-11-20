

export const itemsReducer = (state = {
    items: [],
    loading: false,
    itemsLoaded: false,
    onHand: 0,
    par: 0,
    currentItem: "",
    amountNeeded: 0
}, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.items,
                loading: false,
                itemsLoaded: true,
            }
        case "UPDATE_ITEM_NAME":
            return {
                ...state,
                name: action.name
            }
        case "UPDATE_ITEM_PAR":
            return {
                ...state,
                par: action.par
            }

        case "UPDATE_CURRENT_ITEM":
            return {
                ...state,
                currentItem: action.item
            }
        case "UPDATE_ON_HAND":
            return {
                ...state,
                onHand: action.onHand
            }
        // case "UPDATING_ITEM_ON_HAND":
        //     return {
        //         ...state,
        //         onHand: action.onHand
        //     }
        case "LOADING_ITEMS":
            return {
                ...state,
                loading: true
            }
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items, action.item]
            }
        default:
            return state;
    }
}

