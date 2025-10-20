import React from 'react';
import Layout from '../components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from '@/lib/mdx';

const HomePage = async () => {
  const { mdxSource, frontmatter } = await getMdxContent('index');

  return (
    <Layout>
      {frontmatter?.title ? (
        <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      ) : null}
      <MDXRemote {...mdxSource} />
    </Layout>
  );
};

export default HomePage;