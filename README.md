# Learning MDX Project

Project for learning MDX with Nextjs. It includes a custom plugin for remark and two ways of code grouping.

## Summary

This project has two routes:
- `/docs`: This uses components to render code groups.
- `/plugin`: This uses a custom remark plugin for code groups, without the use of `<CodeGroup />` component inside `.mdx` file

## Features

- *Dual render for comparison*: Use of components and plugins
- *Interactive API Runner*: Component that makes a `fetch` for testing API endpoints
- *Dynamic routes*: Routes are generated based on `/content` directory, where you could add more `.mdx` files
- *Custom Components*: Map markdown regular syntax to custom components 

## Learning concepts

Things learned from this project

### Unified

Core for parsing and transforming AST. It creates a syntax tree using `unist` specification

### mdx

Markdown with `jsx` components

### Remark

Markdown processor to use with plugins

### Rehype

HTML processor to use with plugins
