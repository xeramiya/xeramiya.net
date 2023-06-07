import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nelax2Dream",
  description: "音楽ループマシン",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
