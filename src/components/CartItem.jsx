import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../context/CartContex";
import { useContext } from "react";

function CartItem({ item }) {
  // destructure item
  const { id, title, image, category, amount, price } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <>
      <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          {/* image */}
          <Link to={`/product-detail/${id}`}>
            <img className="max-w-[80px]" src={image} alt="/" />
          </Link>

          <div className="w-full flex flex-col">
            {/* title */}
            <div className="flex justify-between mb-2">
              <Link
                to={`/product-detail/${id}`}
                className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                {title}
              </Link>

              {/* remove icons */}
              <div
                onClick={() => removeFromCart(id)}
                className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>

            {/* qty */}
            <div className="flex gap-x-2 h-[36px] text-sm">
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                {/* minus icons */}
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 flex justify-center items-center cursor-pointer">
                  <IoMdRemove />
                </div>
                {/* amout */}
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                {/* plus icons */}
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>
              {/* item price */}
              <div className="flex flex-1 items-center justify-around">
                {price}
              </div>
              {/* final price */}
              {/* make the price at 2 decimals */}
              <div className="flex-1 flex justify-end items-center text-primary font-bold">{`$ ${parseFloat(
                price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
