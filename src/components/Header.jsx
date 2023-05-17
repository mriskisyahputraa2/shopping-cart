import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <>
      <div>
        <div>Header</div>
        <div onClick={() => setIsOpen(!isOpen)}>Open/Close</div>
      </div>
    </>
  );
}

export default Header;
