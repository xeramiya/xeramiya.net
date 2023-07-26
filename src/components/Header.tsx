import Link from "next/link";
import { XeramiyaNetIcon } from "components/Icon";
import Head from "next/head";

export const Header = () => {
  return (
    <header className="fixed h-11 w-full select-none bg-glass backdrop-blur-md hover:backdrop-blur-xl z-50">
      <nav className="mx-auto max-w-screen-slate">
        <div id="x-logo" className="float-left ml-1 p-1">
          <Link href="/" aria-label="xeramiya.net">
            <XeramiyaNetIcon className="h-9 fill-char-glass px-4 duration-200 hover:fill-media-invert" />
          </Link>
        </div>
        <ul className="mx-1 flex justify-end py-1 text-center font-mono text-base">
          <li>
            <Link
              href="/about"
              className="mx-1 block px-4 py-2 text-char-glass duration-200 hover:text-media-invert"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="mx-1 block px-4 py-2 text-char-glass duration-200 hover:text-media-invert"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className="mx-1 block px-4 py-2 text-char-glass duration-200 hover:text-media-invert"
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
