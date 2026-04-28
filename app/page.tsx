import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight  text-zinc-50">
            Docs as Code
          </h1>
          <p className="max-w-md text-lg leading-8  text-zinc-400">
            This is a test project on how to build a Docs as code
          </p>

          <h2 className="text-2xl">Stack Used</h2>
          <ul>
            <ol>Next.js</ol>
            <ol>next-mdx</ol>
            <ol>Remark</ol>
            <ol>Rehype</ol>
            <ol>Prism</ol>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-white px-5 transition-colors hover:bg-[#1a1a1a]"
            href='/docs/api-call'
          >
            Check it in action
          </Link>
        </div>
      </main>
    </div>
  );
}
