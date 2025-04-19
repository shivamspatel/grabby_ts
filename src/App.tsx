import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import Home from './grabbl-app/home/index'
import Merchant from './grabbl-app/grabbl-merchants/index'

import Blog from './grabbl-app/blogs/index'
import BlogPost from './grabbl-app/blog-post/index'
// import TestimonialCard  from './Pages/TestimonialCard ';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/merchant" element={<Merchant /> } />

          <Route path="/blog" element={<Blog /> } />
          <Route path="/blog-post" element={<BlogPost /> } />
          {/* <Route path="/review" element={<TestimonialCard  />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App