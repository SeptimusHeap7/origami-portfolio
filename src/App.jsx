import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "./App.css";
import OrigamiIcon from "./components/OrigamiIcon";



const GALLERY = [
  {
    id: "crane-1",
    title: "White Crane",
    description: "Classic origami crane folded from 15cm kami paper.",
    img: "/Users/ginnygandhi/origami-portfolio/src/assets/images/3d Star Orange and Yellow_Original.JPG",
    tags: ["classic", "bird"],
  },
  {
    id: "modular-icosa",
    title: "Modular Icosahedron",
    description: "30-unit modular icosahedron made from metallic paper.",
    img: "/images/icosa.jpg",
    tags: ["modular", "geometric"],
  },
  {
    id: "tessellation-hex",
    title: "Hex Tessellation",
    description: "A repeating hex tessellation exploring curvature.",
    img: "/images/tess-hex.jpg",
    tags: ["tessellation"],
  },
];

const POSTS = [
  {
    id: "folding-basics",
    title: "Folding Basics: Mountain vs Valley",
    date: "2025-08-01",
    excerpt: "A quick primer on mountain and valley folds and why paper grain matters.",
    content:
      "Understanding mountain and valley folds is the first step to mastering origami. Also: how paper grain affects crispness and which papers are best for different models.",
  },
  {
    id: "modular-assembly",
    title: "Tips for Assembling Modular Origami",
    date: "2025-07-20",
    excerpt: "Keep your units consistent and pre-crease carefully — here's a checklist.",
    content:
      "When building modular models, consistency is king. Use a jig for small units, and pre-crease in batches to speed the process.",
  },
];

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
  <OrigamiIcon width={32} height={32} color="#7d5e52" />
  Origami — Rishi
</Link>
        <div className="nav-links">
          <Link to="/gallery" className="btn">Gallery</Link>
          <Link to="/blog" className="btn">Blog</Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="container home">
      <h1>Origami Portfolio</h1>
      <p>A curated collection of folds, projects, and notes.</p>
      <div className="button-row">
        <Link to="/gallery" className="btn">View Gallery</Link>
        <Link to="/blog" className="btn">Read Blog</Link>
      </div>
    </div>
  );
}

function Gallery() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = GALLERY.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.join(" ").includes(query.toLowerCase())
  );

  return (
    <div className="container gallery">
      <h2>Gallery</h2>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, description, or tag"
        className="search-input"
      />

      <div className="gallery-grid">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setSelected(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelected(item)}
          >
            <img src={item.img} alt={item.title} className="gallery-image" />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small className="tags">{item.tags.join(" • ")}</small>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setSelected(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.img} alt={selected.title} className="modal-image" />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <button className="btn close-btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Blog() {
  return (
    <div className="container blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {POSTS.map((post) => (
          <article key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <div className="date">{post.date}</div>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read more</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container blog-post-detail">
      <h2>{post.title}</h2>
      <div className="date">{post.date}</div>
      <p>{post.content}</p>
      <button className="btn" onClick={() => navigate(-1)}>Back to Blog</button>
    </div>
  );
}

function NotFound() {
  return (
    <div className="container">
      <h2>404 — Page not found</h2>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
