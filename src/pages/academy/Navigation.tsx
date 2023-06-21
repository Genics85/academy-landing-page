import { InlineIcon } from "@iconify/react";
import { useState } from "react";

function Navigation() {
  const [mobileNavOpened, setMobielNavOpened] = useState(false);
  return (
    <div>
      <nav className="relative p-3 bg-academyBg h-14 flex justify-between items-center">
        <h3 className="text-3xl font-bold">ACA</h3>
        <ul className="gap-x-8 hidden md:flex">
          <li>
            <a href="#courses" className="hover:cursor-pointer hover:text-academyPrimary">
              {" "}
              Courses
            </a>
          </li>
          <li>
            <a href="#about" className="hover:cursor-pointer hover:text-academyPrimary">
              {" "}
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:cursor-pointer hover:text-academyPrimary">
              Services{" "}
            </a>
          </li>
          <li>
            <a href="#events" className="hover:cursor-pointer hover:text-academyPrimary">
              Events{" "}
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:cursor-pointer hover:text-academyPrimary">
              {" "}
              Blog
            </a>
          </li>
        </ul>
        <button className="hidden border-2 rounded-md border-academyPrimary text-academyPrimary px-3 py-1 text-sm hover:text-white hover:bg-academyPrimary md:block">
          CONTACT
        </button>
        <button
          onClick={() => {
            setMobielNavOpened(!mobileNavOpened);
          }}
          className="h-10 flex justify-center items-center w-10 text-3xl text-academyPrimary rounded-md border-academyPrimary border-2 md:hidden"
        >
          <InlineIcon
            icon={mobileNavOpened ? "ep:close-bold" : "ci:hamburger-md"}
          />
        </button>
      </nav>
      <nav
        className={`bg-academyBg ${mobileNavOpened ? "" : "hidden"} md:hidden`}
      >
        <ul className="flex flex-col space-y-5 p-3 ">
          <li>
            <a href="#courses" className="hover:cursor-pointer hover:text-academyPrimary">
              {" "}
              Courses
            </a>
          </li>
          <li>
            <a href="#about" className="hover:cursor-pointer hover:text-academyPrimary">
              {" "}
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:cursor-pointer hover:text-academyPrimary">
              Services{" "}
            </a>
          </li>
          <li>
            <a href="#events" className="hover:cursor-pointer hover:text-academyPrimary">
              Events{" "}
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:cursor-pointer hover:text-academyPrimary">
              {" "}
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
