
export const ordersReducer = (state ={
    orders: [],
    items: [],
    neededItems: [],
    loading: false,
    ordersLoaded: false,
    currentOrder: null,
    itemsLoaded: false,
    currentItem: null
}, action) => {
    switch(action.type) {
        case "UPDATE_ORDER":
            return {
                ...state,
                neededItems: [...state.neededItems, action.item]
            }

        case "GET_ORDERS":
            return {
                ...state,
                orders: action.orders,
                loading: false,
                ordersLoaded: true
            }
        default:
            return state;
    }
}