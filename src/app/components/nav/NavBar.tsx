import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div className="w-full sticky top-0 shadow-md z-30 bg-slate-200">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-4 md:gap-0">
            <Link href={"/"} className={`${redressed.className} space-x-1`}>
              <span className="font-bold text-lg text-orange-400">
                Shoopping
              </span>
              <span className="font-bold text-lg text-black">App</span>
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart</div>
              <div>User Menu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
