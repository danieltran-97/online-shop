enum ProductAction {
  SET_PRODUCTS = "SET_PRODUCTS",
  SELECTED_PRODUCTS = "SELECTED_PRODUCTS",
  REMOVE_SELECTED_PRODUCTS = "REMOVE_SELECTED_PRODUCTS",
}

type ProductActionString = keyof typeof ProductAction;

//@ts-ignore
export { ProductAction, ProductActionString };
