"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
const Vivus = require("vivus");
import { useRive } from "rive-react";

export default function Signature() {
  useEffect(() => {
    let sign = new Vivus("signature", {
      duration: 90,
      type: "oneByOne",
      start: "autostart",
    });
    const signature = document.getElementById("signature");
    if (signature) {
      signature.addEventListener("click", () => {
        sign.stop().reset().play();
      });
    }
  });

  const { rive, RiveComponent } = useRive({
    src: "/asset/icon/xeramiya-logomotion.riv",
    animations: "Looper",
    autoplay: true,
  });

  return (
    <div className="stand">
      <article className="mx-4 mt-12">
        <section>
          <svg
            id="signature"
            className="active:opacity-70"
            viewBox="0 0 1967 1967"
            fill="none"
          >
            <path
              className="stroke-round stroke-char-main stroke-[20px]"
              d="M1247.4,536.587c5.494,-42.904 87.586,-131.93 174.109,-223.625c-391.919,170.455 -770.052,368.347 -1127.71,606.984c-66.594,54.252 -61.085,116.939 12.778,153.343c178.787,115.67 81.093,242.777 -183.692,353.009c22.802,-56.752 79.792,-97.75 137.37,-140.565c277.378,-189.845 402.721,-401.834 410.513,-630.943c-4.685,-81.68 -45.885,-114.804 -78.269,-75.075c-95.545,140.318 -161.17,446.567 -130.981,662.89c12.896,47.717 31.337,79.202 78.269,73.477c85.781,6.598 165.219,-137.303 244.391,-287.518c-48.621,33.936 -97.507,127.865 -100.632,202.86c15.115,184.256 247.034,-102.74 352.211,-311.478c133.661,50.998 224.802,-67.853 296.304,-265.156c-100.373,213.926 -209.144,420.382 -340.231,606.983c-14.672,20.509 -30.64,31.909 -48.5,29.996c-16.339,-63.833 9.677,-116.173 59.682,-124.238c457.737,-28.087 657.827,-261.929 798.663,-543.091c-32.967,206.055 -81.765,412.11 -143.76,618.165c68.901,-215.844 -127.618,-449.571 -217.236,-282.705c-141.442,269.166 215.016,227.593 402.526,-39.954c-378.089,346.509 -655.192,629.328 -648.514,733.172"
            />
          </svg>
          <div className="">
            <RiveComponent className="h-12 w-12" />
          </div>
        </section>
      </article>
    </div>
  );
}
