import React from 'react';
import Layout from '@/app/components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    return (
      <Layout>
        <article>
          <h1>{post.title}</h1>
          <MDXRemote {...post.mdxSource} />
        </article>
      </Layout>
    );
  } catch (e) {
    return notFound();
  }
}