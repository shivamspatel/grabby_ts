import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Blog, Blogs } from './Blog';
import { getInitialBlogs, saveBlog } from './localStorage';

interface BlogContextType {
  blogs: Blogs;
  currentBlogId: string;
  currentBlog: Blog;
  setCurrentBlogId: (id: string) => void;
  updateBlog: (blogId: string, updatedBlog: Blog) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blogs>({});
  const [currentBlogId, setCurrentBlogId] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize blogs from localStorage
  useEffect(() => {
    const initialBlogs = getInitialBlogs();
    setBlogs(initialBlogs);
    
    // Set first blog as current if none is selected
    if (Object.keys(initialBlogs).length > 0 && !currentBlogId) {
      setCurrentBlogId(Object.keys(initialBlogs)[0]);
    }
    
    setIsInitialized(true);
  }, []);

  const updateBlog = (blogId: string, updatedBlog: Blog) => {
    const updatedBlogs = saveBlog(blogs, blogId, updatedBlog);
    setBlogs(updatedBlogs);
  };

  // Current blog based on selected ID
  const currentBlog = currentBlogId && blogs[currentBlogId] ? blogs[currentBlogId] : {
    id: '',
    title: '',
    intro: '',
    imageUrl: '',
    boldBody: '',
    body2Paragraph: '',
    quote: '',
    conclusion: ''
  };

  // Provide context values only after initialization
  if (!isInitialized) {
    return <div className="flex items-center justify-center min-h-screen">Loading blogs...</div>;
  }

  return (
    <BlogContext.Provider
      value={{
        blogs,
        currentBlogId,
        currentBlog,
        setCurrentBlogId,
        updateBlog
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};