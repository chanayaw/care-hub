import Link from "next/link";
import { appNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex w-full max-w-64 flex-col border-r px-4 py-6",
        className,
      )}
    >
      <div className="mb-4">
        <Link href="/dashboard" className="text-lg font-black">
          {siteConfig.name}
        </Link>
      </div>
      <nav className="flex flex-col gap-2">
        {appNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-stone-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
