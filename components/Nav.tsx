import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="Nav">
      <img className="Logo" src="/logo/logo.png" />
      &nbsp; &nbsp;
      <div className="Nav-links">
        <Link href="/">
          <a className={router.pathname == "/" ? "text-red-500 font-bold" : ""}>
            Home
          </a>
        </Link>
        <Link href="/stands">
          <a
            className={
              router.pathname == "/stands" ? "text-red-500 font-bold" : ""
            }
          >
            Stands
          </a>
        </Link>
        <Link href="/characters">
          <a
            className={
              router.pathname == "/characters" ? "text-red-500 font-bold" : ""
            }
          >
            Characters
          </a>
        </Link>
      </div>
      <div className="flex-1"></div>
      <button onClick={() => setOpen(!isOpen)} className="block md:hidden">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <a
        className="hidden md:block"
        href="https://www.github.com/rikiraspoutine"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" color="#EE2121" />
      </a>
      <aside
        className={isOpen ? "drawer translate-x-0" : "drawer -translate-x-full"}
      >
        
        <span className="flex items-center p-4 hover:bg-red-500 hover:text-white ">
          
          <Link href="/"><a className="pr-5">Home</a></Link>
        </span>
        <span className="flex items-center p-4 hover:bg-red-500 hover:text-white ">
          <Link href="/characters">
          <a className="pr-5">Characters</a>
          </Link>
        </span>
        <span className="flex items-center p-4 hover:bg-red-500 hover:text-white ">
          <Link href="/stands">
          <a className="pr-5">Stands</a>
          </Link>
        </span>
        <span className="flex items-center p-4 hover:bg-red-500 hover:text-white ">
          <a href="https://www.github.com/rikiraspoutine/" className="pr-5">Github</a>
        </span>
       
      </aside>
    </nav>
  );
};

export default Nav;
