"use client";

import Link from "next/link";
import { useRive } from "rive-react";

const header = () => {
  const { rive, RiveComponent } = useRive({
    src: "./assets/logos/xeramiya-logomotion.riv",
    animations: "Enter",
    autoplay: true,
  });

  return (
    <header className="fixed h-11 w-full select-none bg-glass py-1 text-char-glass backdrop-blur-sm hover:backdrop-blur-md">
      <nav className="mx-auto max-w-screen-lect">
        <div id="x-logo" className="float-left mx-2 h-9 w-9 invert dark:invert-0">
          <Link href="./">
            <RiveComponent className="" />
          </Link>
        </div>
        <ul className="mx-1 flex justify-end text-center font-mono text-sm">
          <li>
            <Link href="/about" className="mx-1 block px-3 py-2 hover:text-char-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/weblog" className="mx-1 block px-3 py-2 hover:text-char-link">
              Weblog
            </Link>
          </li>
          <li>
            <Link href="/archive" className="mx-1 block px-3 py-2 hover:text-char-link">
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
