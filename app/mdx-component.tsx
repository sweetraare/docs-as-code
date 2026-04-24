// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
// Import your custom API component using ESM
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // This allows you to style standard tags or add custom ones
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    // MyApiRunner, 
    ...components,
  }
}
