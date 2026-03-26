// app/blog/page.tsx
//
// Blog page — wires BlogGrid between the existing shared components.
// Navbar and Footer are assumed to be in the root layout already.
// Only the middle section (BlogGrid) is new.

import BlogGrid    from "@/components/Blog/BlogGrid";
import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";

export default function BlogPage() {
  return (
    <main>
      <BlogGrid />
      <FormOverlap />
      <CallToAction />
    </main>
  );
}