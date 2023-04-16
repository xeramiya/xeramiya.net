import type { Metadata } from "next";
import Footer from "components/Footer";
import Header from "components/Header";

export const metadata: Metadata = {
  title: "C0Un+er",
  description: "カウンター",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
