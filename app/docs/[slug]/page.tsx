import path from "path"
import fs from "fs"
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from "rehype-prism-plus";
import { ApiRunner } from "@/app/components/ApiRunner";
import matter from 'gray-matter';
import { CodeGroup } from "@/app/components/CodeGroup";


export default async function PostPage(props: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await props.params;
  const fileToPath = path.join(process.cwd(), 'content', `${slug}.mdx`);

  const source = fs.readFileSync(fileToPath, 'utf8')

  const { data, content } = matter(source);

  console.log({ data, content })

  const components = {
    ApiRunner: (props: any) => <ApiRunner {...props} endpoint={data.baseUrl} />,
    CodeGroup
  }


  return <article>
    <MDXRemote source={content}
      components={components}
      options={{
        scope: data,
        mdxOptions: {
          rehypePlugins: [rehypePrism]
        }
      }}
    />
  </article>
}
