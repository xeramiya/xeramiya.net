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

  let streamingChannel = 0;
  function streamingControl(order) {
    if (order === 0) {
      streamingChannel = 0;
    } else {
      streamingChannel += 1;
    }
  }

  useEffect(() => {
    audioCtx.current = new AudioContext();
  });

  async function setDisc(disc) {
    const audioBuffer = await audioCtx.current.decodeAudioData(
      await disc.arrayBuffer()
    );
    setAudioBuffer(audioBuffer);
    sourceNode = audioCtx.current.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(audioCtx.current.destination);
    sourceNode.loop = true;
  }

  useEffect(() => {
    const playbutton = document.getElementById("playbutton");
    playbutton.addEventListener("click", async () => {
      console.log("streamingChannel: " + streamingChannel);
      if (streamingChannel === 0) {
        await streamingControl(1);

        const disc = await fetch("./assets/audio/Nelax2Dream/Nelax-Tentacling/Nelax-Tentacling.wav");
        await setDisc(disc);
        await console.log(sourceNode);

        await sourceNode.start();
        await console.log("playing!");
      }
    });

    const stopbutton = document.getElementById("stopbutton");
    stopbutton.addEventListener("click", async () => {
      sourceNode?.stop();
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
          <section className="">
            <h1 className="text-xl font-bold">
              Nelax2Dream
            </h1>
            <p className="text-gray">
              Sound Looper
            </p>
          </section>
          <section className="py-4">
            <div className="flex h-12">
              <div id="playbutton" className="bg-nand-default/50 hover:bg-nand-default my-1 float-left w-full rounded-l-lg h-12">
                <div className="float-left text-lg font-mono pl-4 h-16 text-align">
                  Nelax-Tentacling
                  <div className="text-xs text-gray">
                    STr3292
                  </div>
                </div>
                <div className="float-left pointer-events-none">
                </div>
              </div>
              <button id="stopbutton" className="bg-iRed/70 hover:bg-iRed text-align flot h-12 text-mono px-4 float-right rounded-r-lg my-1">
                EJECT
              </button>
            </div>
          </section>
        </article>
      </Layout>
    </div >
  )
}