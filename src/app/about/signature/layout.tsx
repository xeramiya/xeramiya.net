import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature",
  description: "誰かのサイン",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
