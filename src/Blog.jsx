import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import { Search, Filter, ChevronDown } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = ['All', 'Research', 'Oncology Tool', 'Clinical Tool', 'Endocrinology', 'Diagnostic Tech'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="blog-page animate-blur-fade">
      <div className="container">
        <header className="blog-header">
          <span className="section-tag">Clinical Knowledge Hub</span>
          <h1 className="section-title">Insights, <span>Research</span> & Clinical Tools</h1>
          <p className="section-body">
            Access our comprehensive library of peer-reviewed research, 
            oncology calculators, and clinical guidelines.
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="resource-controls">
          <div className="search-box-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search by title, condition, or tool name..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-tabs">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {displayedPosts.length > 0 ? (
            displayedPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="blog-card resource-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-card-tag">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <span className="blog-card-date">{post.date}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-link">View Resource →</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results container text-center">
              <h3>No resources found matching your search.</h3>
              <button 
                className="btn-outline mt-2"
                onClick={() => {
                   setSearchQuery('');
                   setSelectedCategory('All');
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {visibleCount < filteredPosts.length && (
          <div className="load-more-wrapper text-center">
            <button 
              className="btn-secondary"
              onClick={() => setVisibleCount(prev => prev + 9)}
            >
              Load More Resources <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
