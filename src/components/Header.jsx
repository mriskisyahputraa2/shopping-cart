import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <>
      <div>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}>
          <BsBag />
        </div>
      </div>
    </>
  );
}

export default Header;
