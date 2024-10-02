import Logo from "./Logo";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <div className="fixed w-screen h-16 bg-neutral-50 px-16 max-md:px-6 z-50">
      <div className="flex items-center justify-center h-full border-b-2 border-b-solid border-b-neutral-200">
        <Logo />
        <NavLinks />
      </div>
    </div>
  );
}

export default NavBar;
