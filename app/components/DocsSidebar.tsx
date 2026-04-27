'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavGroupProps = {
  title: string,
  base: string,
  description: string,
  slugs: string[],
}

const NavGroup = ({ title, base, description, slugs }: NavGroupProps) => {
  const pathname = usePathname();

  return <div className="mb-10">
    <div className="px-3 mb-4">
      <h4 className="text-white font-bold text-sm tracking-tight">{title}</h4>
      <p className="text-[10px] text-slate-500 uppercase font-medium">{description}</p>
    </div>
    <ul className="space-y-1">
      {slugs.map((slug) => {
        const href = `/${base}/${slug}`;
        const isActive = pathname === href;

        return (
          <li key={`${base}-${slug}`}>
            <Link
              href={href}
              className={`group flex items-center px-3 py-2 text-sm rounded-md transition-all ${isActive
                ? 'bg-indigo-500/10 text-indigo-400 font-medium'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {/* Visual indicator for active link */}
              {isActive && <span className="w-1 h-4 bg-indigo-500 absolute left-0 rounded-r-full" />}
              <span className="capitalize">{slug.replace(/-/g, ' ')}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
}

type DocsSidebarProps = {
  slugs: string[]
}

export function DocsSidebar({ slugs }: DocsSidebarProps) {
  return <nav>
    <div>
      <h2> Docs as Code </h2>
    </div>
    <div>

      <NavGroup title={"Components"} base={"docs"} description={"Using components"} slugs={slugs} />
      <NavGroup title={"Pluggins"} base={"plugin"} description={"Using pluggins"} slugs={slugs} />

    </div>
  </nav>
}
