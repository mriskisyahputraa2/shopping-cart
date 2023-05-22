import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get product from product contex
  const { products } = useContext(ProductContext);

  // hanya ngambil data nya sesuai dengan category di API-nya
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <>
      <div>
        <Hero />
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none ">
              {filterProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
