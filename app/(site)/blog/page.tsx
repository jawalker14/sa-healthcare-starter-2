// Why:
// - Add canonical and OG/Twitter metadata for blog index
// - Align container classes with design tokens
import React from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Articles and updates from the practice.',
  openGraph: { type: 'website' },
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <div className="container-x py-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
              {post.excerpt ? <p className="text-gray-600">{post.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;