"use client";
// components/blog/BlogGrid.tsx
//
// Blog card grid — updated to use internal /blog/[slug] links
// so clicking a card navigates to the local blog post page.
// All 7 posts pulled from the central lib/blogData.ts source.

import Link from "next/link";
import { POSTS } from "@/lib/blogData";
// app/blog/page.tsx — make sure capital B matches your folder

const STYLES = `
  .bg-section {
    background-color: #ffffff;
    padding: 60px 20px 80px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .bg-section { padding: 72px 32px 96px;   } }
  @media (min-width: 1024px) { .bg-section { padding: 80px 48px 100px;  } }
  @media (min-width: 1440px) { .bg-section { padding: 100px 64px 120px; } }

  .bg-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) { .bg-container { max-width: 1200px; } }

  .bg-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    margin: 0 0 56px 0;
    line-height: 1em;
    font-size: clamp(36px, 6vw, 60px);
  }
  @media (min-width: 640px)  { .bg-heading { margin-bottom: 64px; } }
  @media (min-width: 1024px) { .bg-heading { margin-bottom: 72px; } }

  .bg-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (min-width: 640px)  { .bg-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; } }
  @media (min-width: 1024px) { .bg-grid { grid-template-columns: repeat(3, 1fr); gap: 36px; } }
  @media (min-width: 1440px) { .bg-grid { gap: 44px; } }

  /* Card — white default, yellow on hover */
  .bg-card {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.25s ease;
  }
  .bg-card:hover { background-color: #FFC501; }

  .bg-img-wrap {
    width: 100%;
    overflow: hidden;
    height: 200px;
    flex-shrink: 0;
  }
  @media (min-width: 640px)  { .bg-img-wrap { height: 190px; } }
  @media (min-width: 1024px) { .bg-img-wrap { height: 210px; } }
  @media (min-width: 1440px) { .bg-img-wrap { height: 240px; } }

  .bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .bg-card:hover .bg-img { transform: scale(1.05); }

  .bg-body {
    padding: 20px 20px 28px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  @media (min-width: 1024px) { .bg-body { padding: 22px 24px 32px; } }

  .bg-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #292929;
    margin: 0 0 10px 0;
    line-height: 1.3em;
    font-size: clamp(16px, 1.8vw, 19px);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .bg-date {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #888888;
    margin: 0 0 12px 0;
    font-size: clamp(12px, 1.3vw, 13px);
  }
  .bg-card:hover .bg-date { color: #5a4a00; }

  .bg-excerpt {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #545454;
    line-height: 1.7em;
    margin: 0;
    font-size: clamp(13px, 1.4vw, 14px);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .bg-card:hover .bg-excerpt { color: #292929; }
`;

export default function BlogGrid() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="bg-section">
        <div className="bg-container">
          <h1 className="bg-heading">Blog</h1>
          <div className="bg-grid">
            {POSTS.map((post) => (
              /*
               * href now points to /blog/[slug] — the local dynamic route.
               * No more external primeleed.com links.
               */
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-card"
              >
                <div className="bg-img-wrap">
                  <img src={post.image} alt={post.imageAlt} className="bg-img" />
                </div>
                <div className="bg-body">
                  <h2 className="bg-title">{post.title}</h2>
                  <p className="bg-date">{post.date}</p>
                  <p className="bg-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}