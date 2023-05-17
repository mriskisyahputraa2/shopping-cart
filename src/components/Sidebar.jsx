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
        } "w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:w-[30vw] xl:max-w-[30vw] transtion-all duration-300 z-20 px-4`}>
        Sidebar
      </div>
    </>
  );
}

export default Sidebar;
