import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import SingleCourse from '../SingleCourse/SingleCourse';

const CategoryCourses = () => {
    const allCategoryCourses = useLoaderData()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://assignment10-server-one.vercel.app/course-category`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    return (
        <div className='bg-slate-100'>
            <div className='container mx-auto courese-container mt-10'>
                <div className='my-categories bg-white rounded-xl'>
                    {
                        categories.map(category => <Category key={category.id} category={category} />)
                    }
                </div>
                <div className='mx-auto w-11/12 md:w-3/5 lg:w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    {
                        allCategoryCourses.map(courses => <SingleCourse key={courses.id} course={courses} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryCourses;