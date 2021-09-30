import { types } from '../types/types'

const initialState = {
    product: []
}

export const CategoriaReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.productActive:
            return {
                ...state,
                product: action.payload
            }   
        default:
            return state
    }
}