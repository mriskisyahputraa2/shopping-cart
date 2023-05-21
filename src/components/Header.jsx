import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContex";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { itemAmount } = useContext(CartContext);

  return (
    <>
      <header className="bg-pink-200">
        <div>Header</div>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}>
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
