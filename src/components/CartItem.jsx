import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

function CartItem({ item }) {
  // destructure item
  const { id, title, image, category, amount, price } = item;

  return (
    <>
      <div className="flex">
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
              <div className="text-xl cursor-pointer">
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>

            {/* qty */}
            <div className="flex gap-x-2 h-[36px] text-sm">
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                {/* minus icons */}
                <div className="flex-1 flex justify-center items-center cursor-pointer">
                  <IoMdRemove />
                </div>
                {/* amout */}
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                {/* plus icons */}
                <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>
              {/* item price */}
              <div>{price}</div>
              {/* final price */}
              {/* make the price at 2 decimals */}
              <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
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
