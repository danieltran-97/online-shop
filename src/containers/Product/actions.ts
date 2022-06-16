import { ProductAction } from "./actionTypes";
import { Product } from "./types";

export const setProducts = (products: Product[]) => (<const>{
    type: ProductAction.SET_PRODUCTS,
    products
})

export const selectedProducts = (products: any) => (<const>{
    type: ProductAction.SELECTED_PRODUCTS,
    payload: products
})

export const removeProducts = (products: any) => (<const>{
    type: ProductAction.REMOVE_SELECTED_PRODUCTS,
    payload: products
})

export type SetProducts = ReturnType<typeof setProducts>
export type SelectedProducts = ReturnType<typeof selectedProducts>
export type RemoveProducts = ReturnType<typeof removeProducts>

export type ProductActions = ReturnType<
    typeof setProducts |
    typeof selectedProducts |
    typeof removeProducts
>
