import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courese.css'

const Courses = () => {
    const [categories, setCategories] = useState([])
    const allCourse = useLoaderData()

    useEffect(() => {
        fetch(`http://localhost:5000/course-category`)
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
                    allCourse.map(course => <SingleCourse key={course._id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;