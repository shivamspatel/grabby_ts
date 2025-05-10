import { useState, useEffect } from "react";

import { getInitialBlogs } from "../../blog-editor/components/localStorage";

export function Title() {
  const [blogs, setBlogs] = useState(getInitialBlogs()); 

  // Sync blogs with localStorage whenever it changes
  useEffect(() => {
    const storedBlogs = getInitialBlogs();
    setBlogs(storedBlogs);
  }, []);

  return (
    <h1 className="text-9xl font-bold">
      {blogs[`blog-1`].title} 
    </h1>
  );
}