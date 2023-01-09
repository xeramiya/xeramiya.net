import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Layout from '../components/layout'
import React from 'react'
import { useState, useEffect, useRef } from "react"

export default function Home() {
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
        await streamControl(true);
        const disc = await fetch("./assets/audio/Nelax2Dream/Nelax-Tentacling/Nelax-Tentacling.wav");
        await setDisc(disc);
        await console.log("enjoy!");
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
    <div>
      <Head>
        <title>Nelax2Dream - UEBIT STRINGs</title>
        <meta name="description" content="Music loop machine" />
      </Head>

      <Layout>
        <article className="pt-2 pb-16 mx-1">
          <section className="pb-4">
            <h1 className="">
              Nelax2Dream
            </h1>
            <p className="text-gray">
              ノイズを耳に詰め込んで
            </p>
          </section>
          <section className="py-4">
            <div className="flex h-12">
              <div id="playbutton" className="bg-nand-default/50 hover:bg-nand-default my-1 float-left w-full rounded-l-lg h-12">
                <div className="float-left text-lg font-mono pl-4 h-16 text-align">
                  Nelax-Tentacling
                  <div className="text-xs text-gray">
                    Xeramiya
                  </div>
                </div>
                <div className="float-left pointer-events-none">
                </div>
              </div>
              <button id="stopbutton" className="bg-iRed/70 hover:bg-iRed text-align float h-12 text-mono px-4 float-right rounded-r-lg my-1 font-mono">
                EJECT
              </button>
            </div>
          </section>
        </article>
      </Layout>
    </div >
  )
}