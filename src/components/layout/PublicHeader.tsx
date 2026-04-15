import Link from "next/link";
import { publicNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function PublicHeader() {
  return (
    <header className="border-b-2 border-stone-300 px-6 py-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="text-lg font-black">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-16">
          {publicNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm transition hover:opacity-70 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
