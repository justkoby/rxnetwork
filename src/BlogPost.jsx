import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import { ArrowRight, Calendar, User, ArrowUpRight } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const postIndex = blogPosts.findIndex(p => p.id === postId);
  const post = blogPosts[postIndex];

  if (!post) {
    return <div className="container">Post not found</div>;
  }

  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  return (
    <div className="blog-post-page animate-blur-fade">
      <div className="container">
        <div className="post-header">
          <Link to="/blog" className="back-link">← Back to Insights</Link>
          <span className="post-category">{post.category}</span>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="meta-item"><Calendar size={16} /> {post.date}</span>
            <span className="meta-item"><User size={16} /> {post.author}</span>
          </div>
        </div>

        <div className="post-featured-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        {post.sourceUrl && (
          <div className="external-source-cta">
            <a 
              href={post.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Visit Full Research Source <ArrowUpRight size={18} />
            </a>
          </div>
        )}

        <div className="next-post-section">
          <div className="next-post-card">
            <div className="next-post-label">Up Next</div>
            <h3 className="next-post-title">{nextPost.title}</h3>
            <Link to={`/blog/${nextPost.id}`} className="btn-secondary">
              Read Next Article <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
