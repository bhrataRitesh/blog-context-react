import React, { useContext, useEffect } from 'react';

import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import TagPage from './Pages/TagPage';
import BlogPage from './Pages/BlogPage';
import { AppContext } from './context/AppContext';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

      fetchBlogPosts(Number(page), null, tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts();
    }

  }, [location.pathname, location.search])
  return (
    // <div className='w-full h-full flex flex-col items-center justify-center gap-x-1'>
    //   <Header />
    //   <Blogs />
    //   <Pagination />

    // </div>


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs/:blogId' element={<BlogPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
