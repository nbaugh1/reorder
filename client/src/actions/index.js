const baseUrl = 'http://localhost:3001'

export const updateOrder = (item) =>{
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


