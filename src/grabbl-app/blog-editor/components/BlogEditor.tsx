import React, { useState, useEffect } from "react";
import { useBlogContext } from "./BlogContext";
import { Blog } from "./Blog";
import { Save } from "lucide-react";
import { getInitialBlogs, saveBlog } from "./localStorage";

const BlogEditor: React.FC = () => {
  const { currentBlogId } = useBlogContext();
  const [formData, setFormData] = useState<Blog>(getInitialBlogs()[currentBlogId]); // Initialize with the latest data

  // Sync formData with the latest blog data when currentBlogId changes
  useEffect(() => {
    const blogs = getInitialBlogs(); // Fetch the latest blogs from localStorage
    setFormData(blogs[currentBlogId]); // Update formData with the current blog
  }, [currentBlogId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const blogs = getInitialBlogs(); // Fetch the latest blogs
    const updatedBlog = { ...blogs[currentBlogId], ...formData }; // Update the current blog
    const updatedBlogs = saveBlog(blogs, currentBlogId, updatedBlog); // Save to localStorage
    setFormData(updatedBlogs[currentBlogId]); // Update formData with the saved data
    alert("Blog title saved!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Blog Title"
          />
        </div>

        <div>
          <label htmlFor="intro" className="block text-sm font-medium text-gray-700">
            Introduction
          </label>
          <textarea
            id="intro"
            name="intro"
            rows={3}
            value={formData.intro}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write an introduction for your blog..."
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Blog Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label htmlFor="boldBody" className="block text-sm font-medium text-gray-700">
            Bold Body
          </label>
          <textarea
            id="boldBody"
            name="boldBody"
            rows={4}
            value={formData.boldBody}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
            placeholder="This text will appear bold..."
          />
        </div>

        <div>
          <label htmlFor="body2Paragraph" className="block text-sm font-medium text-gray-700">
            Second Paragraph
          </label>
          <textarea
            id="body2Paragraph"
            name="body2Paragraph"
            rows={4}
            value={formData.body2Paragraph}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Continue your blog content here..."
          />
        </div>

        <div>
          <label htmlFor="quote" className="block text-sm font-medium text-gray-700">
            Quote
          </label>
          <textarea
            id="quote"
            name="quote"
            rows={2}
            value={formData.quote}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm italic"
            placeholder="Add a memorable quote..."
          />
        </div>

        <div>
          <label htmlFor="conclusion" className="block text-sm font-medium text-gray-700">
            Conclusion
          </label>
          <textarea
            id="conclusion"
            name="conclusion"
            rows={3}
            value={formData.conclusion}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Wrap up your blog with a conclusion..."
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;