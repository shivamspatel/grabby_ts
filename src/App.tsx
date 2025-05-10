import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Home from './grabbl-app/home/index'
import Merchant from './grabbl-app/grabbl-merchants/index'
import BlogEditor from './grabbl-app/blog-editor'
import Blog from './grabbl-app/blogs/index'
import BlogPost from './grabbl-app/blog-post/index'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/merchant" element={<Merchant /> } />
          <Route path="/blog-editor" element={<BlogEditor /> } />
          <Route path="/blog" element={<Blog /> } />
          <Route path="/blog-post/1" element={<BlogPost /> } />
          <Route path="/blog/:blogId" element={<BlogPost /> } />
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App