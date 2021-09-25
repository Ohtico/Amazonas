import {types} from '../types/types'

export const loginReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.login:
            return{
                ...state
            }
            default:
                return state;
    }

}
