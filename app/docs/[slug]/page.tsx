import path from "path"
import fs from "fs"
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from "rehype-prism-plus";

export default async function PostPage(props: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await props.params;
  const fileToPath = path.join(process.cwd(), 'content', `${slug}.mdx`);

  const source = fs.readFileSync(fileToPath, 'utf8')

  return <article>
    <MDXRemote source={source}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypePrism]
        }
      }}
    />
  </article>
}
