const initialState = {
    orders: [],
    items: [],
    neededItems: [],
    loading: false,
    ordersLoaded: false,
    currentOrder: null,
    itemsLoaded: false,
}


export const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_ORDER":
            return {
                ...state,
                neededItems: [...state.neededItems, action.item]
            }
        case "GET_ORDER":
            return {
                ...state,
                loading: false,
                currentOrder: action.order
            }
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.orders,
                loading: false,
                ordersLoaded: true
            }

        case "ADD_ORDER":
            return {
                ...state,
                orders: [...state.orders, action.order]
            }

        case "LOADING_ORDERS":
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}