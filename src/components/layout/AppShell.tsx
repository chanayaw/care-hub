import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-6 py-8">{children}</main>
    </div>
  );
}
