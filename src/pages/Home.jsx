import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  // get product from product contex
  const { products } = useContext(ProductContext);

  // get only men`s & women`s clothing category
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filterProducts);
  return (
    <>
      <section className="my-16">
        <div className="container mx-auto">
          <div className="grid">
            {filterProducts.map((product) => {
              return (
                <div
                  className="w-full h-[300px] bg-pink-200 mb-4"
                  key={product.id}>
                  {product.title}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
