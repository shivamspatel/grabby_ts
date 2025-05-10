import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useBlogContext } from './BlogContext';


const BlogDropdown: React.FC = () => {
  const { blogs, currentBlogId, setCurrentBlogId } = useBlogContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectBlog = (blogId: string) => {
    setCurrentBlogId(blogId);
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
      >
        <span className="font-medium">{blogs[currentBlogId]?.title || 'Select a blog'}</span>
        <ChevronDown 
          className={`ml-2 h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {Object.values(blogs).map((blog) => (
              <li 
                key={blog.id}
                onClick={() => selectBlog(blog.id)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-indigo-50 transition-colors duration-150
                  ${currentBlogId === blog.id ? 'bg-indigo-100 font-medium' : ''}`}
              >
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogDropdown;