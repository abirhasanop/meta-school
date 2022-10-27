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
        <div className='container mx-auto courese-container mt-10'>
            <div className='my-categories bg-white rounded-xl'>
                {
                    categories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
            <div className='grid grid-cols-3'>
                {
                    allCategoryCourses.map(courses => <SingleCourse key={courses.id} course={courses} />)
                }
            </div>
        </div>
    );
};

export default CategoryCourses;