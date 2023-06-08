"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Nelax2Dream() {
  const audioCtx = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  let sourceNode;
  let streamChannel = useRef(false);

  function streamControl(order) {
    streamChannel.current = order;
  }

  useEffect(() => {
    audioCtx.current = new AudioContext();
  });

  // 指定音源を再生
  async function playDisc(disc) {
    const audioBuffer = await audioCtx.current.decodeAudioData(
      await disc.arrayBuffer()
    );
    setAudioBuffer(audioBuffer);
    sourceNode = audioCtx.current.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(audioCtx.current.destination);
    sourceNode.loop = true;
    await sourceNode.start();
  }

  // 指定音源をセット
  function setDisc(disc) {
    // 一筋縄では音声を再生できないブラウザ用
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx.current = new AudioContext();
    audioCtx.current.createBufferSource().start(0);
    playDisc(disc);
  }

  useEffect(() => {
    const playbutton = document.getElementById("playbutton");
    playbutton.addEventListener("click", async () => {
      if (!streamChannel.current) {
        streamControl(true);
        const disc = await fetch(
          "/asset/audio/Nelax2Dream/Nelax-Tentacling/Nelax-Tentacling.wav"
        );
        setDisc(disc);
        console.log("enjoy!");
      } else {
        return;
      }
    });

    const stopbutton = document.getElementById("stopbutton");
    stopbutton.addEventListener("click", async () => {
      sourceNode?.stop();
      streamControl(false);
    });
  });

  return (
    <div className="stand">
      <article className="mx-6 mt-12">
        <div>
          <h1 className="">Nelax2Dream</h1>
          <p className="text-gray">ノイズを耳に詰め込んで</p>
        </div>
        <hr className="border-char-note" />
        <section className="pt-12">
          <div className="flex h-12 text-white">
            <div
              id="playbutton"
              className="bg-nand-dark hover:bg-nand float-left my-1 h-12 w-full rounded-l-lg"
            >
              <div className="text-align float-left h-16 pl-4 font-mono text-lg">
                Nelax-Tentacling
                <div className="text-xs text-gray">Xeramiya</div>
              </div>
              <div className="pointer-events-none float-left"></div>
            </div>
            <button
              id="stopbutton"
              className="text-align float text-mono float-right my-1 h-12 rounded-r-lg bg-ReD px-4 font-mono hover:bg-iRed"
            >
              EJECT
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}
