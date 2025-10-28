// Why:
// - Ensure blog posts emit proper SEO metadata (canonical, OG/Twitter)
// - Source values from MDX frontmatter and site URL env
import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/app/components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug);
    const base = process.env.NEXT_PUBLIC_SITE_URL;
    const url = base ? new URL(`/blog/${params.slug}`, base).toString() : undefined;
    const description = (post.frontmatter?.description as string | undefined) || undefined;
    const ogImage = (post.frontmatter as any)?.ogImage as string | undefined;
    return {
      title: post.title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title: post.title,
        description,
        url,
        type: 'article',
        images: ogImage ? [{ url: ogImage }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: ogImage ? [ogImage] : undefined,
      },
    };
  } catch {
    return {};
  }
}

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