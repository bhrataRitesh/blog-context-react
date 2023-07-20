import React from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'
import { useContext } from 'react'
const Blogs = () => {
    const { loading, posts } = useContext(AppContext);
    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 mt-[10px] mb-[40px]">
            {
                loading ? (<Spinner />) : posts.length === 0 ? (<div className=''><p className=''>No Post Found</p></div>) : (
                    posts.map((post) => {
                        return (<BlogDetails key={post.id} post={post} />)
                    })
                )

            }

        </div>
    )
}

export default Blogs