

export const itemsReducer = (state = {
    items: [],
    loading: false,
    itemsLoaded: false,
    onHand: 0
}, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.items,
                loading: false,
                itemsLoaded: true,
            }
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

