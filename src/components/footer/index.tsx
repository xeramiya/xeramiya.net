import Link from "next/link";

import packageJson from "../../../package.json";

const Footer = () => {
  return (
    <footer className="sticky top-full mx-auto mt-24 w-full select-none pt-1 pb-2 text-right">
      <Link href="/debug" className="inline-block rounded-l-md bg-error px-2 font-serif text-char-error">
        大規模改装作業中: 大部分へのアクセス不可
      </Link>
      <div className="mx-2 text-char-note">
        <Link
          href="https://github.com/xeramiya/xeramiya.net"
          className="font-mono italic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="">
            {packageJson.name} v{packageJson.version}
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
