import type { ReactNode } from "react";
import { PublicHeader } from "@/components/layout/PublicHeader";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
