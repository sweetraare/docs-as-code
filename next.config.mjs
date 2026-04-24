import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  // Keep it simple here
  extension: /\.mdx?$/,
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
