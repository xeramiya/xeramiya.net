import Link from "next/link";
import { XeramiyaLogo } from "components/icon";

const Header = () => {
  return (
    <header className="fixed h-11 w-full select-none bg-glass backdrop-blur-md hover:backdrop-blur-xl">
      <nav className="mx-auto max-w-screen-lect">
        <div id="x-logo" className="float-left ml-1 p-0.5">
          <Link href="./">
            <XeramiyaLogo className="h-10 fill-char-glass hover:fill-invert" />
          </Link>
        </div>
        <ul className="mx-1 flex justify-end text-center font-mono text-sm py-1">
          <li>
            <Link
              href="/about"
              className="mx-1 block px-4 py-2 text-char-glass hover:text-invert"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="mx-1 block px-4 py-2 text-char-glass hover:text-invert"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className="mx-1 block px-4 py-2 text-char-glass hover:text-invert"
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
