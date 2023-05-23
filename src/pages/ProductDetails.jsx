import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContex";

function ProductDetails() {
  // get the product id from the url
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get then single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;

  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          {/* image */}
          <div>
            <img src={image} alt="/" />
          </div>
          {/* text */}
        </div>
      </section>
    </>
  );
}
export default ProductDetails;
