const initialState = {
    orders: [],
    items: [],
    loading: false,
    ordersLoaded: false,
    currentOrder: null,
    itemsLoaded: false,
    currentItem: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
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