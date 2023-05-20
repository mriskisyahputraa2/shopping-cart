// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
        <div className="flex items-center justify-between border-b py-6">
          <div className="uppercase text-sm font-semibold">Shopping Bag</div>

          {/* icons */}
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdArrowForward />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
