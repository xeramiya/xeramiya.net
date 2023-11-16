import type { Metadata } from "next";
import "styles/hyper-gates.css";

export const metadata: Metadata = {
  title: "HyperGates",
  description: "先へ...",
};

export default function HyperGates() {
  return (
    <section>
      <div className="ultra-wide flex justify-center p-5 pt-16">
        <div className="slate:w-screen-slate container relative h-[80vh] min-h-[20rem] w-full overflow-hidden rounded-xl fill-char-main text-char-main slate:min-w-[61.8%]  bg-media-invert">
          <div className="absolute h-full w-full rounded-xl bg-white opacity-5"></div>
          <div className="hyper-stitch-1 absolute h-full w-full rounded-xl border-media-invert"></div>
          <div className="hyper-stitch-2 absolute h-full w-full rounded-xl border-media-invert"></div>
          <div className="hyper-stitch-3 absolute h-full w-full rounded-xl border-media-invert"></div>
          <div className="absolute h-full w-full rounded-xl backdrop-blur-xl"></div>
          {/*
          <div className="absolute bottom-0 right-0 px-4 py-6 font-serif text-3xl">
            <span className="inline-block">ようこそ</span>
          </div>
          */}
          <div className="hyper-rainbow absolute h-full w-full rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}
