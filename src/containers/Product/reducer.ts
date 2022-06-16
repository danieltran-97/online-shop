import { ProductActions } from "./actions"
import { ProductAction } from "./actionTypes"
import { Product } from "./types"

// export type ProductsState = {
//     products: Product[]
// }
export interface IProductsState {
    products: Product[]
}

const initalState: IProductsState = {
    products:[
        {} as Product
    ]
}
type InputActions = ProductActions

export const productReducer = (state = initalState, action: InputActions): IProductsState => {
    switch (action.type) {
        case ProductAction.SET_PRODUCTS:
            return {...state, products: action.products}
        default:
            return state
    }
}