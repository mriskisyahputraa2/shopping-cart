import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <>
      <header className="bg-pink-200">
        <div>Header</div>
      </header>
      <div
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen(!isOpen)}>
        <BsBag />
      </div>
    </>
  );
}

export default Header;
