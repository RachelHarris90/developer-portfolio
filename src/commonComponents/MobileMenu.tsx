import { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "../icons/HamburgerMenu";
import { Navigation } from "../sections/Navigation";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <div className="flex items-center justify-between w-full mb-4">
      <div className="relative inline-block">
        <button onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenu />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-80 bg-white shadow-lg">
            <Navigation />
          </div>
        )}
      </div>
      <Link className="text-3xl font-extrabold" to="/">
        rachel.
      </Link>
    </div>
  );
};
