import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C0Un+er",
  description: "カウンター",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
