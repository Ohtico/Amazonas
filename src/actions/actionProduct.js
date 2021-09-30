import { types } from '../types/types'
import { loadProduct } from '../helpers/loadProduct'

export const Listar = (coleciones) => {
    return async (dispatch) => {
        const product = await loadProduct(coleciones)
        dispatch(setProduct(product))
        dispatch(setCategoria(product))
    }
}

export const setProduct = (product) => ({
    type: types.productLoad,
    payload:
        product
})

export const setCategoria = (product) => ({
    type: types.productActive,
    payload:
        product
})