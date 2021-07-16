const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.indexOf(action.productId) !== -1) {
                return state
            }
            return [ ...state, action.productId ]
        case 'REMOVE_FROM_CART':
            return state.filter( (val)=> val !== action.productId ) //state.splice( state.indexOf(action.productId), 1)
        default:
            return state
    }
}
  
const quantityById = (state = initialState.quantityById, action) => {
    const { productId } = action
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, [productId]: (state[productId] || 0) + 1}
        case 'REMOVE_FROM_CART':
            if(state[productId]===1){
                delete state[productId]
                return state
            }
            else{
                state[productId]-=1
                return state
            }
        default:
            return state
    }
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_OUT':
            return initialState
        case 'REMOVE_FROM_CART':
            const { productId } = action
            if(state.quantityById[productId]===1){
                return {addedIds: addedIds(state.addedIds, action),quantityById: quantityById(state.quantityById, action)}
            }
            else return {...state, quantityById: quantityById(state.quantityById, action)}
        case 'BUY':
            return initialState
        default:
            return {addedIds: addedIds(state.addedIds, action),quantityById: quantityById(state.quantityById, action)}
    }
}

export default cart 