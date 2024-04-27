import { Link } from "react-router-dom";
import { MobileMenu } from "../commonComponents/MobileMenu";
import { Navigation } from "./Navigation";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { SocialLinks } from "../components/SocialLinks/SocialLinks";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between pb-8">
        <Link className="hidden md:flex text-3xl font-extrabold" to="/">
          rachel.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-2 sm:gap-8 md:gap-12 align-center">
          <Navigation />
          {/* <DarkModeToggle /> */}
          <SocialLinks />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};
