export function Title({ children }: { children: string }) {
  return (
    <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl mb-8">
      {children}
    </h1>
  )
}

export function Subtitle({ children }: { children: string }) {
  return (
    <h2 className="mt-10 scroll-m-20 border-b border-slate-200 pb-2 text-3xl font-semibold tracking-tight text-slate-200 first:mt-0 mb-4">
      {children}
    </h2>
  )
}

export function Paragraph({ children }: { children: string }) {
  return (
    <p className="leading-7 text-slate-400 not-first:mt-6 mb-4">{children}</p>
  )
}
