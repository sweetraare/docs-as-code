import { DocsSidebar } from '@/app/components/DocsSidebar'
import path from 'path'
import fs from 'fs'

type DocsLayoutProps = {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const contentDir = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDir)

  const slugs = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''))

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <DocsSidebar slugs={slugs} />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-12 px-8">{children}</div>
      </main>
    </div>
  )
}
