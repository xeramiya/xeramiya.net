import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-slate">
        <article>
          <section>
            <div className="ultra-wide flex justify-center p-5 pt-16">
              <div className="slate:w-screen-slate container relative h-[80vh] min-h-[20rem] w-full overflow-hidden rounded-xl bg-char-note fill-char-main text-char-main  slate:min-w-[61.8%]">
                <div className="absolute bottom-0 right-0 px-4 py-6 font-serif text-3xl">
                  <span className="inline-block">CURRENTLY</span>
                  <span className="inline-block">&nbsp;UNDER</span>
                  <span className="inline-block">&nbsp;RECONSTRUCTION</span>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-4">
            <ul>
              <li className="my-1 py-1">
                <Link href="/about" className="hover:underline">
                  <h2 className="">About</h2>
                </Link>
                <div className="text-char-note">わたくせについて</div>
              </li>
              <li className="my-1 py-1">
                <Link href="/blog" className="hover:underline">
                  <h2 className="">Blog</h2>
                </Link>
                <div className="text-char-note">人の気配がないブログ</div>
              </li>
              <li className="my-1 py-1">
                <Link href="/archive" className="hover:underline">
                  <h2 className="">Archive</h2>
                </Link>
                <div className="text-char-note">作ったもの色々ごった煮広場</div>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
