import { Blog, Blogs } from "./Blog";

const STORAGE_KEY = "blog-manager-data";

export const getInitialBlogs = (): Blogs => {
  const storedBlogs = localStorage.getItem(STORAGE_KEY);

  if (storedBlogs) {
    return JSON.parse(storedBlogs);
  }

  // Create 7 initial empty blogs
  const initialBlogs: Blogs = {};

  for (let i = 1; i <= 7; i++) {
    initialBlogs[`blog-${i}`] = {
      id: `blog-${i}`,
      title: `Blog ${i}`,
      intro: "",
      imageUrl: "",
      boldBody: "",
      body2Paragraph: "",
      quote: "",
      conclusion: "",
    };
  }

  // Store initial blogs
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialBlogs));

  return initialBlogs;
};

export const saveBlogs = (blogs: Blogs): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
};

export const saveBlog = (
  blogs: Blogs,
  blogId: string,
  updatedBlog: Blog
): Blogs => {
  const updatedBlogs = {
    ...blogs,
    [blogId]: updatedBlog,
  };

  saveBlogs(updatedBlogs);

  return updatedBlogs;
};
