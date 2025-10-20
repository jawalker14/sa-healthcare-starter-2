import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'content', 'pages');
const POSTS_DIR = path.join(ROOT, 'content', 'posts');

export type MDXFrontmatter = Record<string, any> & {
  title?: string;
  description?: string;
  date?: string;
};

export async function getMdxContent(slug: string) {
  const mdxPath = path.join(PAGES_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(mdxPath, 'utf8');
  const { content, data } = matter(raw);
  const mdxSource = await serialize(content);
  return { mdxSource, frontmatter: data as MDXFrontmatter };
}

export async function getPageSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(PAGES_DIR);
    return (files as string[])
      .filter((f: string) => f.endsWith('.mdx'))
      .map((f: string) => f.replace(/\.mdx$/, ''))
      .filter((s: string) => s !== 'index');
  } catch {
    return [];
  }
}

export type PostListItem = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
};

export async function getAllPosts(): Promise<PostListItem[]> {
  try {
  const files = await fs.readdir(POSTS_DIR);
  const mdxFiles = (files as string[]).filter((f: string) => f.endsWith('.mdx'));
    const items: PostListItem[] = [];
    for (const file of mdxFiles) {
      const raw = await fs.readFile(path.join(POSTS_DIR, file), 'utf8');
      const { content, data } = matter(raw);
      const title = (data.title as string) || file.replace(/\.mdx$/, '');
      const excerpt = (data.excerpt as string) || content.split('\n').slice(0, 3).join(' ');
      const slug = file.replace(/\.mdx$/, '');
      items.push({ slug, title, excerpt, date: data.date as string | undefined });
    }
    return items.sort((a, b) => (a.date && b.date ? (a.date > b.date ? -1 : 1) : 0));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf8');
  const { content, data } = matter(raw);
  const mdxSource = await serialize(content);
  const title = (data.title as string) || slug;
  return { slug, title, frontmatter: data as MDXFrontmatter, mdxSource };
}
