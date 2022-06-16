import { useEffect } from "react";
import axios from "axios";
import ProductLayout from "./ProductLayout";
import { setProducts } from "./actions";
import { connect } from "react-redux";
import { Product } from "./types";

interface IProductListingProps {
  setProducts: (products: Product[]) => void;
}

type AllProps = IProductListingProps;

const ProductListing: React.FC<AllProps> = ({ setProducts }) => {
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error fetching", err);
      });
    //@ts-ignore
    setProducts(response.data);
    //@ts-ignore
    console.log(response.data);
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductLayout />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setProducts: (products: Product[]) => {
    dispatch(setProducts(products));
  },
});

export default connect(undefined, mapDispatchToProps)(ProductListing);
