import { Link } from "@remix-run/react";
import { useState } from "react";
import { AppLogo } from "~/components/app-logo";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <section className="w-ful bg-white min-h-screen flex flex-col">
      <nav className="sticky flex flex-row top-0 z-30 items-center justify-between p-4 border-b border-zinc-200">
        <Link to="/" className="flex items-center space-x-2">
          <AppLogo className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="font-semibold text-zinc-900 capitalize ">gitposter</h1>
        </Link>
        <button onClick={() => setNavOpen(!isNavOpen)} className="md:hidden">
          {isNavOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
        </button>
        <div
          className={`flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${
            isNavOpen
              ? "flex-col order-last w-full md:w-auto"
              : "hidden md:flex"
          }`}
        >
          {/* <Link prefetch="intent" to={`/profile/${username}`}>
            @{username}
          </Link>
           */}
          <Link prefetch="intent" to={`/profile/adi`}>
            Adi
          </Link>
          <img
            alt="Profile"
            className="rounded-full"
            height="40"
            src={"https://avatars.githubusercontent.com/u/80854265?v=4&size=40"}
          />
        </div>
      </nav>
    </section>
  );
}
