import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TwitterIcon,
  BlueskyIcon,
  InstagramIcon,
  SteamIcon,
  YouTubeIcon,
  SoundCloudIcon,
  SpotifyIcon,
  GitHubIcon,
  XeramiyaXIconRainbow,
} from "components/Icon";
import "styles/about.css";

export const metadata: Metadata = {
  title: "私について",
  description: "Xeramiyaについて",
};

export default function About() {
  return (
    <div className="stand">
      <article className="mx-4 mt-12">
        <section>
          <div className="flex flex-row">
            <XeramiyaXIconRainbow className="h-[4.75rem]" />
            <div className="">
              <h1 className="text-5xl italic tracking-wide">
                <Link href="about/signature" className="cursor-default">
                  Xeramiya
                </Link>
              </h1>
              <p className="note text-lg">I&apos;m STill standing!!</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-row flex-wrap justify-end py-1">
            <li>
              <Link
                href="https://twitter.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://bsky.app/profile/xeramiya.net"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bluesky"
              >
                <BlueskyIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCKpHbYt5VuQZ6ePTgjVvhfQ"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://steamcommunity.com/id/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Steam"
              >
                <SteamIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://soundcloud.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoundCloud"
              >
                <SoundCloudIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://open.spotify.com/user/fhc8jd5iv2ibh1mt1pncyn2vd"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </section>
        <hr className="border-char-note" />
        <section>
          <div className="mt-8">
            武蔵野新首都圏伝彩区在住の日本人、極度の散歩好きでビーチサンダルを酷使している。
          </div>
        </section>
      </article>
    </div>
  );
}
