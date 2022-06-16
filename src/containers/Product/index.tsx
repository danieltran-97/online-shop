import { useSelector } from "react-redux"
import ProductLayout from "./ProductLayout"

const Product = () => {
    const products = useSelector((state) => state)
    console.log(products)
    return (
        <div className="ui grid container">
            <ProductLayout />
        </div>
    )
}

export default Product