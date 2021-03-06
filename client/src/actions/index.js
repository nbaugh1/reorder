const baseUrl = 'http://localhost:3001'

export const updateOrder = (item) => {
    return dispatch => {
        dispatch({ type: "UPDATE_ORDER", item })
    }
}

export const getItems = () => {
    return dispatch => {
        dispatch({ type: "LOADING_ITEMS" })
        return fetch(baseUrl + '/items')
            .then(resp => resp.json())
            .then(itemsJSON => {
                return dispatch({ type: 'GET_ITEMS', items: itemsJSON })
            })
    }
}

export const updateItemName = (name) => {
    return dispatch => {
        dispatch({ type: "UPDATE_ITEM_NAME", name })
    }
}

export const updateItemPar = (par) => {
    return dispatch => {
        dispatch({ type: "UPDATE_ITEM_PAR", par })
    }
}

export const updateOnHand = (onHand) => {
    return dispatch => {
        dispatch({ type: "UPDATE_ON_HAND", onHand })
    }
}

export const addItem = (item, history) => {
    return dispatch => {
        return fetch(baseUrl + '/items', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item })
        })
            .then(resp => resp.json())
            .then(item => {
                dispatch({ type: "ADD_ITEM", item })
                history.push('/items')
            })
    }
}

export const updateCurrentItem = (item) => {
    return dispatch => {
        return fetch(baseUrl + `/items/${item.id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item })
        })
            .then(resp => resp.json())
            .then(item => {
                dispatch(itemOnHandUpdated(item))
            })
    }
}

export const itemOnHandUpdated = item => {
    return {
        type: "UPDATE_CURRENT_ITEM", item
    }
}

export const getOrders = () => {
    return dispatch => {
        dispatch({ type: "LOADING_ORDERS" })
        return fetch(baseUrl + '/orders')
            .then(resp => resp.json())
            .then(ordersJSON => {
                return dispatch({ type: 'GET_ORDERS', orders: ordersJSON })
            })
    }
}

export const getOrder = id => {
    return dispatch => {
        dispatch({ type: "LOADING_ORDER" });
        return fetch(baseUrl + '/orders/' + id)
            .then(resp => resp.json())
            .then(order => dispatch({ type: "GET_ORDER", order }))
    }
}

export const addOrder = (order, history) => {
    return dispatch => {
        return fetch(baseUrl + '/orders', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ order })
        })
            .then(resp => resp.json())
            .then(order => {
                dispatch({ type: "ADD_ORDER", order })
                history.push('/orders')
            })
    }
}

export const clearItemCounts = (clearedItems) => {
    return dispatch => {
        return dispatch({ type: "CLEAR_ITEM_COUNTS", clearedItems })
    }
}
