import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunks from 'redux-thunk'
import { loginReducer } from '../reducers/loginReducer'
import {registerReducer} from '../reducers/registerReducer'
import {ProductReducer} from '../reducers/ProductReducer'
import {CategoriaReducer} from '../reducers/CategoriaReducer'


const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    product: ProductReducer,
    categoria: CategoriaReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunks)
    )
)

