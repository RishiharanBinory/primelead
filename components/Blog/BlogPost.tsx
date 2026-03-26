// components/blog/BlogPost.tsx
//
// Renders a single blog post page — matches primeleed.com/[post-slug]/ exactly:
//
//   1. Title (centered, large, Work Sans 800)
//   2. Date + "Blog" category tag (centered, muted)
//   3. Social share icons row (Facebook, Pinterest, Twitter — centered)
//   4. Hero image (full width)
//   5. Article body — sections each with an h3 heading + paragraphs
//   6. Optional YouTube embed
//   7. Optional pull-quote block (yellow left border, teal Twitter icon)
//   8. Tags row
//   9. Previous post navigation link
//  10. Leave a Reply comment form
//  11. Related posts — 3 cards in a row (same yellow hover as BlogGrid)

"use client";

import Link from "next/link";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { BlogPost as BlogPostType, getRelatedPosts } from "@/lib/blogData";

const STYLES = `
  /* ── PAGE WRAPPER ── */
  .bp-page {
    background: #ffffff;
    padding: 60px 20px 80px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .bp-page { padding: 72px 32px 96px; } }
  @media (min-width: 1024px) { .bp-page { padding: 80px 48px 100px; } }

  /* ── ARTICLE CONTAINER ── */
  .bp-article {
    max-width: 780px;
    margin: 0 auto;
  }

  /* ── TITLE ── */
  .bp-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    text-align: center;
    line-height: 1.2em;
    margin: 0 0 16px 0;
    font-size: clamp(26px, 4vw, 42px);
  }

  /* ── META: date + category ── */
  .bp-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
  }
  .bp-date {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #888;
  }
  .bp-category {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #149AB5;
    text-decoration: none;
    font-weight: 600;
  }
  .bp-category:hover { text-decoration: underline; }

  /* ── SOCIAL SHARE ROW ── */
  .bp-share {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 32px;
  }
  .bp-share-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease;
    text-decoration: none;
  }
  .bp-share-btn:hover { opacity: 0.8; }
  .bp-share-fb   { background-color: #1877F2; }
  .bp-share-pin  { background-color: #E60023; }
  .bp-share-tw   { background-color: #1DA1F2; }

  /* ── HERO IMAGE ── */
  .bp-hero-img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 48px;
    object-fit: cover;
    max-height: 460px;
  }

  /* ── SECTION HEADING ── */
  .bp-h3 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #292929;
    margin: 40px 0 14px 0;
    line-height: 1.3em;
    font-size: clamp(18px, 2.5vw, 22px);
  }
  .bp-h3:first-child { margin-top: 0; }

  /* ── PARAGRAPH ── */
  .bp-p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: #545454;
    line-height: 1.8em;
    margin: 0 0 18px 0;
    font-size: clamp(14px, 1.6vw, 16px);
  }

  /* ── YOUTUBE EMBED ── */
  .bp-video-wrap {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
    margin: 40px 0;
  }
  .bp-video-wrap iframe {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* ── PULL QUOTE ── */
  .bp-quote {
    border-left: 4px solid #FFC501;
    padding: 20px 28px;
    margin: 40px 0;
    background-color: #fffdf0;
  }
  .bp-quote-icon {
    font-size: 48px;
    line-height: 1;
    color: #FFC501;
    font-family: Georgia, serif;
    display: block;
    margin-bottom: 8px;
  }
  .bp-quote-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    color: #292929;
    line-height: 1.6em;
    margin: 0 0 12px 0;
    font-size: clamp(15px, 2vw, 18px);
    font-style: italic;
  }
  .bp-quote-author {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #149AB5;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* ── TAGS ROW ── */
  .bp-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 40px 0 0;
    padding-top: 28px;
    border-top: 1px solid #e0e0e0;
  }
  .bp-tag {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #149AB5;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }
  .bp-tag:hover { color: #0e7a90; }
  .bp-tag + .bp-tag::before {
    content: ", ";
    color: #888;
    font-weight: 400;
  }

  /* ── PREV/NEXT NAV ── */
  .bp-nav {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #e0e0e0;
  }
  .bp-nav-label {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: block;
    margin-bottom: 4px;
  }
  .bp-nav-link {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #149AB5;
    text-decoration: none;
    font-size: clamp(14px, 1.8vw, 16px);
    transition: color 0.2s;
  }
  .bp-nav-link:hover { color: #0e7a90; }

  /* ── COMMENT FORM ── */
  .bp-comment-section {
    max-width: 780px;
    margin: 60px auto 0;
    padding-top: 48px;
    border-top: 1px solid #e0e0e0;
  }
  .bp-comment-heading {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #292929;
    margin: 0 0 6px 0;
    font-size: clamp(20px, 3vw, 26px);
  }
  .bp-comment-note {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #888;
    margin: 0 0 28px 0;
  }
  .bp-comment-note span { color: #e00; }
  .bp-form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
  @media (min-width: 640px) {
    .bp-form-row { grid-template-columns: 1fr 1fr 1fr; }
  }
  .bp-label {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #292929;
    display: block;
    margin-bottom: 6px;
  }
  .bp-label span { color: #e00; }
  .bp-input, .bp-textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d0d0d0;
    padding: 10px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #292929;
    outline: none;
    transition: border-color 0.2s;
    border-radius: 0;
    background: #fff;
  }
  .bp-input:focus, .bp-textarea:focus { border-color: #149AB5; }
  .bp-textarea { resize: vertical; min-height: 140px; margin-bottom: 16px; }
  .bp-checkbox-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 24px;
  }
  .bp-checkbox-row input { margin-top: 3px; flex-shrink: 0; }
  .bp-checkbox-row label {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #545454;
  }
  .bp-submit {
    background-color: #292929;
    color: #ffffff;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding: 14px 32px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    letter-spacing: 0.02em;
  }
  .bp-submit:hover { background-color: #149AB5; }

  /* ── RELATED POSTS GRID ── */
  .bp-related {
    max-width: 1000px;
    margin: 80px auto 0;
    padding-top: 0;
  }
  @media (min-width: 1440px) { .bp-related { max-width: 1200px; } }
  .bp-related-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  @media (min-width: 640px)  { .bp-related-grid { grid-template-columns: repeat(3, 1fr); } }

  /* card — same yellow hover as BlogGrid */
  .bp-rel-card {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    overflow: hidden;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.25s ease;
  }
  .bp-rel-card:hover { background-color: #FFC501; }

  .bp-rel-img-wrap {
    width: 100%;
    height: 180px;
    overflow: hidden;
    flex-shrink: 0;
  }
  @media (min-width: 1024px) { .bp-rel-img-wrap { height: 200px; } }

  .bp-rel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .bp-rel-card:hover .bp-rel-img { transform: scale(1.05); }

  .bp-rel-body { padding: 16px 16px 24px; }

  .bp-rel-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #292929;
    margin: 0 0 8px 0;
    line-height: 1.35em;
    font-size: clamp(14px, 1.6vw, 17px);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .bp-rel-date {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #888;
    margin: 0 0 8px 0;
  }
  .bp-rel-card:hover .bp-rel-date { color: #5a4a00; }
  .bp-rel-excerpt {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #545454;
    line-height: 1.7em;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .bp-rel-card:hover .bp-rel-excerpt { color: #292929; }
`;

interface Props {
  post: BlogPostType;
}

export default function BlogPost({ post }: Props) {
  const related = getRelatedPosts(post.slug);
  const shareUrl = typeof window !== "undefined"
    ? window.location.href
    : `https://www.primeleed.com/blog/${post.slug}`;

  return (
    <>
      <style>{STYLES}</style>
      <div className="bp-page">

        {/* ── ARTICLE ── */}
        <article className="bp-article">

          {/* Title */}
          <h1 className="bp-title">{post.title}</h1>

          {/* Date + Category */}
          <div className="bp-meta">
            <span className="bp-date">{post.date}</span>
            <Link href="/blog" className="bp-category">Blog</Link>
          </div>

          {/* Social share */}
          <div className="bp-share">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank" rel="noopener noreferrer"
              className="bp-share-btn bp-share-fb"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={14} color="white" />
            </a>
            <a
              href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank" rel="noopener noreferrer"
              className="bp-share-btn bp-share-pin"
              aria-label="Share on Pinterest"
            >
              <FaPinterest size={14} color="white" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="bp-share-btn bp-share-tw"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={14} color="white" />
            </a>
          </div>

          {/* Hero image */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="bp-hero-img"
          />

          {/* Article sections */}
          {post.sections.map((section, si) => (
            <div key={si}>
              <h3 className="bp-h3">{section.heading}</h3>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="bp-p">{p}</p>
              ))}

              {/* Insert YouTube embed after section index 2 if present */}
              {post.youtubeId && si === 2 && (
                <div className="bp-video-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${post.youtubeId}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Insert pull-quote after section index 3 if present */}
              {post.quote && si === 3 && (
                <blockquote className="bp-quote">
                  <span className="bp-quote-icon">&ldquo;</span>
                  <p className="bp-quote-text">{post.quote.text}</p>
                  <span className="bp-quote-author">
                    {post.quote.author}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.quote.text + " — " + post.quote.author)}`}
                      target="_blank" rel="noopener noreferrer"
                      aria-label="Tweet this quote"
                    >
                      <FaTwitter size={16} color="#1DA1F2" />
                    </a>
                  </span>
                </blockquote>
              )}
            </div>
          ))}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="bp-tags">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="bp-tag">
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Previous post nav */}
          {post.prev && (
            <nav className="bp-nav">
              <span className="bp-nav-label">Previous</span>
              <Link href={`/blog/${post.prev.slug}`} className="bp-nav-link">
                {post.prev.title}
              </Link>
            </nav>
          )}
        </article>

        {/* ── COMMENT FORM ── */}
        <div className="bp-comment-section">
          <h2 className="bp-comment-heading">Leave a Reply</h2>
          <p className="bp-comment-note">
            Your email address will not be published. Required fields are marked <span>*</span>
          </p>

          <div>
            {/* Comment textarea */}
            <div style={{ marginBottom: "16px" }}>
              <label className="bp-label" htmlFor="comment">
                Comment <span>*</span>
              </label>
              <textarea id="comment" className="bp-textarea" required />
            </div>

            {/* Name / Email / Website row */}
            <div className="bp-form-row">
              <div>
                <label className="bp-label" htmlFor="name">Name <span>*</span></label>
                <input id="name" type="text" className="bp-input" required />
              </div>
              <div>
                <label className="bp-label" htmlFor="email">Email <span>*</span></label>
                <input id="email" type="email" className="bp-input" required />
              </div>
              <div>
                <label className="bp-label" htmlFor="website">Website</label>
                <input id="website" type="url" className="bp-input" />
              </div>
            </div>

            {/* Save details checkbox */}
            <div className="bp-checkbox-row">
              <input type="checkbox" id="save-details" />
              <label htmlFor="save-details">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button type="submit" className="bp-submit">Post Comment</button>
          </div>
        </div>

        {/* ── RELATED POSTS ── */}
        <div className="bp-related">
          <div className="bp-related-grid">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="bp-rel-card"
              >
                <div className="bp-rel-img-wrap">
                  <img src={rel.image} alt={rel.imageAlt} className="bp-rel-img" />
                </div>
                <div className="bp-rel-body">
                  <h3 className="bp-rel-title">{rel.title}</h3>
                  <p className="bp-rel-date">{rel.date}</p>
                  <p className="bp-rel-excerpt">{rel.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}