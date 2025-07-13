import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItens = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/pricing", label: "Pricing" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItens.map((navItem) => (
        <Link key={navItem.path} className="mr-2" href={navItem.path}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
};
