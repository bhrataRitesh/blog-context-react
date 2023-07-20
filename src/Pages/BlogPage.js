import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BlogDetails from '../components/BlogDetails';
import Header from '../components/Header';
// import Pagination from '../components/Pagination';
import { newBaseUrl } from "../baseUrl";
import { AppContext } from '../context/AppContext'
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';



const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs() {
        setLoading(true);


        let url = `${newBaseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);

            setRelatedBlogs(data.relatedBlogs);
        }
        catch (e) {
            console.log(e);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])
    return (
        <div>
            <Header />
            <div className='w-full h-full flex flex-col items-center justify-center gap-x-1'>

                <div className='flex max-w-[620px] w-11/12 py-3'>
                    <button className='border-2 border-gray-300 py-1 px-4 rounded-md'
                        onClick={() => navigation(-1)}
                    >
                        Back
                    </button>
                </div>
                <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 mt-[10px] mb-[40px]'>

                    {
                        loading ? (<div><Spinner /></div>) : blog ? (<div>
                            <BlogDetails post={blog} />
                            <h2 className='text-3xl font-bold my-3'>Related Blogs</h2>
                            {
                                relatedBlogs.map((post) => (
                                    <div key={post.id}>
                                        <BlogDetails post={post} />
                                    </div>
                                ))
                            }

                        </div>) : (<div><p>No Related Blogs Found</p></div>)

                    }
                </div>

                <Pagination />
            </div>
        </div>
    )
}

export default BlogPage