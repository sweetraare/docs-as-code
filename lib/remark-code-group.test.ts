/* eslint-disable @typescript-eslint/no-explicit-any */
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { describe, it, expect } from 'vitest'
import { remarkCodeGroup } from '../lib/remark-code-group.mjs'

const markdown = `
\`\`\`javascript
const a = 1
\`\`\`

\`\`\`typescript
const b: number = 2
\`\`\`


\`\`\`cs
const b: number = 2
\`\`\`

    `

type TransformedAst = {
  type: string
  children: {
    type: string
    name: string
    attributes: string[]
    children: any[]
  }[]
}

describe('remarkCodeGroup plugin', () => {
  it('should wrap consecutive code blocks in a CodeGroup element', async () => {
    const processor = unified().use(remarkParse).use(remarkCodeGroup)
    const ast = processor.parse(markdown)
    const transformedAst = (await processor.run(ast)) as TransformedAst

    const mdxElement = transformedAst.children.find(
      (node: any) =>
        node.type === 'mdxJsxFlowElement' && node.name === 'CodeGroup'
    )

    expect(mdxElement).toBeDefined()
    expect(mdxElement?.children).toHaveLength(2)
    expect(mdxElement?.children?.[0]?.lang).toBe('javascript')
    expect(mdxElement?.children?.[1]?.lang).toBe('typescript')
  })

  it('should not add unsuported languages in CodeGroup', async () => {
    const processor = unified().use(remarkParse).use(remarkCodeGroup)
    const ast = processor.parse(markdown)
    const transformedAst = (await processor.run(ast)) as TransformedAst
    console.log('trans', transformedAst)

    const mdxElement = transformedAst.children.find(
      (node: any) =>
        node.type === 'mdxJsxFlowElement' && node.name === 'CodeGroup'
    )

    expect(mdxElement).toBeDefined()
    expect(mdxElement?.children.some((c) => c.lang === 'cs')).toBeFalsy()
  })
})
