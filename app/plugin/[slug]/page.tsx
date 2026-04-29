import path from 'path'
import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrism from 'rehype-prism-plus'
import { ApiRunner } from '@/app/components/ApiRunner'
import matter from 'gray-matter'
import { CodeGroup } from '@/app/components/CodeGroup'
import { Paragraph, Subtitle, Title } from '@/app/components/RegularComponents'
import { remarkCodeGroup } from '@/lib/remark-code-group.mjs'
import { ComponentProps, ComponentPropsWithoutRef } from 'react'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default async function PostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const fileToPath = path.join(process.cwd(), 'content', `${slug}.mdx`)

  const source = fs.readFileSync(fileToPath, 'utf8')

  const { data, content } = matter(source)

  const components = {
    ApiRunner: (props: ComponentProps<typeof ApiRunner>) => (
      <ApiRunner {...props} endpoint={data.baseUrl} />
    ),
    CodeGroup,
    h1: (props: ComponentPropsWithoutRef<'h1'>) => (
      <Title {...props}> {props.children} </Title>
    ),
    h2: (props: ComponentPropsWithoutRef<'h2'>) => (
      <Subtitle {...props}> {props.children} </Subtitle>
    ),
    p: Paragraph,
  }

  return (
    <article>
      <MDXRemote
        source={content}
        components={components}
        options={{
          scope: data,
          mdxOptions: {
            remarkPlugins: [remarkCodeGroup],
            rehypePlugins: [
              rehypeSlug,
              rehypePrism,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: 'append',
                  content: {
                    type: 'element',
                    tagName: 'span',
                    properties: {
                      className: [
                        'hover:opacity-100 opacity-50 ml-2 text-slate-500',
                      ],
                    },
                    children: [{ type: 'text', value: '#' }],
                  },
                },
              ],
            ],
          },
        }}
      />
    </article>
  )
}
