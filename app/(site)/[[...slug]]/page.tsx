// Why:
// - Drive page metadata (title/description/OG) from MDX frontmatter
// - Provide canonical URLs and social cards in App Router
// - Keep sane defaults and avoid runtime errors
import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/app/components/Layout';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import TeamList from '@/app/components/TeamList';
import FaqList from '@/app/components/FaqList';
import MapLink from '@/app/components/MapLink';
import WhatsAppCTA from '@/app/components/WhatsAppCTA';
import ContactForm from '@/app/components/forms/ContactForm';
import Section from '@/app/components/ui/Section';
import Card from '@/app/components/ui/Card';
import settings from '@/content/data/settings.json';

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = !slug || slug.length === 0 ? 'index' : slug.join('/');
  try {
    const data = await getMdxContent(slugPath);
    const title = data.frontmatter?.title as string | undefined;
    const description = data.frontmatter?.description as string | undefined;
    const ogImage = (data.frontmatter as any)?.ogImage as string | undefined;
    const base = process.env.NEXT_PUBLIC_SITE_URL;
    const url = base ? new URL((slug && slug.length ? `/${slug.join('/')}` : '/'), base).toString() : undefined;
    return {
      title: title || undefined,
      description: description || undefined,
      alternates: { canonical: url },
      openGraph: {
        title: title || undefined,
        description: description || undefined,
        url,
        images: ogImage ? [{ url: ogImage }]: undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: title || undefined,
        description: description || undefined,
        images: ogImage ? [ogImage] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function DynamicPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const slugPath = !slug || slug.length === 0 ? 'index' : slug.join('/');
  let data: Awaited<ReturnType<typeof getMdxContent>> | null = null;
  try {
    data = await getMdxContent(slugPath);
  } catch (e) {
    return notFound();
  }

  const components = {
    TeamList,
    FaqList: (props: any) => <FaqList enableSchema={Boolean(settings.analytics?.schemaEnabled)} {...props} />,
    MapLink,
    WhatsAppCTA,
  ContactForm,
  Section,
  Card,
  } as const;

  return (
    <Layout>
      <article>
        {data.frontmatter?.title ? <h1>{data.frontmatter.title}</h1> : null}
        <MDXRemote {...data.mdxSource} components={components} />
      </article>
    </Layout>
  );
}