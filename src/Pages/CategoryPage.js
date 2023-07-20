import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
    return (
        <>
            <Header />
            <div className='w-full h-full flex flex-col items-center justify-center gap-x-1 mt-2'>

                <div className='flex max-w-[620px] w-11/12 py-3'>
                    <button className='border-2 border-gray-300 py-1 px-4 rounded-md mr-3'
                        onClick={() => navigation(-1)}
                    >
                        Back
                    </button>
                    <h2 className='font-bold text-xl'>
                        Blogs On <span className='underline text-2xl ml-1'>{category}</span>
                    </h2>
                </div>
                <Blogs />
                <Pagination />
            </div>
        </>
    )
}

export default CategoryPage