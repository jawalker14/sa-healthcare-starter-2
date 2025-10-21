import React from 'react';
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