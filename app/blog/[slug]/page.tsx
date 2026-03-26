import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/blogData";
import BlogPost from "@/components/Blog/BlogPost";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";

// generateStaticParams tells Next.js to pre-build pages for all
// known slugs at build time rather than generating them on demand.
// This makes the pages load faster and improves SEO.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// generateMetadata sets the browser tab title and meta description
// for each individual blog post — important for SEO.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Prime Leed`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

// The actual page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // If no post matches this slug, show the 404 page
  if (!post) notFound();

  return (
    <main>
      <BlogPost post={post} />
      <FormOverlap />
      <CallToAction />
    </main>
  );
}