export const signIn =( payload )=>{
    return{
        type : 'SIGN_IN',
        payload
    };
};
export const signOut=()=>{
    return{
        type : 'SIGN_OUT'
    };
};

export const clickedCategory =( payload )=>{
    return{
        type : 'CLICKED',
        payload
    };
};

export const addToCart = productId => {
    return{
        type: 'ADD_TO_CART',
        productId
    };
};
export const removeFromCart = productId => {
    return{
        type: 'REMOVE_FROM_CART',
        productId
    };
};
export const buy=()=>{
    return{
        type : 'BUY'
    };
};