import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "signature",
  description: "signature.svg",
};

export default function About() {
  return (
    <div className="stand">
      <article className="mx-4 mt-12">
        <section>
          <h1 className="text-5xl italic tracking-wide">
            <Link href="./signature">Xeramiya</Link>
          </h1>
          <p className="note text-lg">I&apos;m STill here!!</p>
        </section>
        <section className="pt-2">
        </section>
      </article>
    </div>
  );
}
