import { connect } from "react-redux";
import { IApplicationState } from "../../redux/reducer";
import { Product } from "./types";

interface propsFromState {
  products: Product[];
}

type AllProps = propsFromState;

const ProductLayout: React.FC<AllProps> = ({ products }) => {
  // const {id, title} = products[0]
  const renderProductPanels = () => {
    return products.map((product) => {
      const { id, title, image, price, category } = product;

      return (
        <div className="four wide column" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <>{renderProductPanels()}</>;
};

const mapStateToProps = ({ allProducts }: IApplicationState) => ({
  products: allProducts.products,
});

export default connect(mapStateToProps)(ProductLayout);
