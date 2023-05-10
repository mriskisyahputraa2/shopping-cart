import { useContext } from "react";
// import Link router-dom
import { Link } from "react-router-dom";
// import react-icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

function Product({ product }) {
  console.log(product);

  const { id, image, category, title, price } = product;
  return (
    <>
      <div>
        <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center">
            {/* image */}
            <div className="w-[200px] mx-auto flex justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </div>
          </div>
          {/* buttons */}
          <div className="absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product-detail/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-x1">
              <BsEyeFill />
            </Link>
          </div>
        </div>
        <div>1</div>
      </div>
    </>
  );
}
export default Product;