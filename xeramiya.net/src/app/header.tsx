"use client";

import Link from "next/link";
import { useRive, Layout, Fit, Alignment } from "rive-react";

const header = () => {
  const { rive, RiveComponent } = useRive({
    src: "./assets/logos/xeramiya-logomotion.riv",
    autoplay: true,
  });

  return (
    <header className="fixed h-11 w-full bg-[color:var(--glass)] py-1 text-[color:var(--char-main)] backdrop-brightness-100 backdrop-blur-md hover:backdrop-blur-xl">
      <nav className="mx-auto max-w-screen-md">
        <div id="x-logo" className="mx-2 h-9 w-9 float-left">
          <Link href="./">
            <RiveComponent />
          </Link>
        </div>
        <ul className="mx-1 flex justify-end text-center font-mono text-sm">
          <li>
            <Link href="/xeramiya" className="mx-1 block w-20 hover:text-[color:var(--char-note)] py-2">
              Xeramiya
            </Link>
          </li>
          <li>
            <Link href="/weblog" className="mx-1 block w-20 hover:text-[color:var(--char-note)] py-2">
              WEBLOG
            </Link>
          </li>
          <li>
            <Link href="/about" className="mx-1 block w-20 hover:text-[color:var(--char-note)] py-2">
              APP
            </Link>
          </li>
        </ul>
        {/*
            <button type="button" className="c-nav-btn bg-white flex md:hidden justify-end">
            </button>
          */}
      </nav>
    </header>
  );
};

export default header;
