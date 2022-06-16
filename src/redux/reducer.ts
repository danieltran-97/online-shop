import { combineReducers } from "redux";
import { IProductsState, productReducer } from "../containers/Product/reducer";

export interface IApplicationState {
  allProducts: IProductsState
}

const reducers = {
  allProducts: productReducer
};

export const rootReducer = combineReducers(reducers)
