import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Loder from '../Loder/Loder';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courese.css'

const Courses = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    // update
    const [allCourse, setAllcourses] = useState([])

    // update
    // const allCourse = useLoaderData()

    useEffect(() => {
        fetch(`https://assignment10-server-one.vercel.app/course-category`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    useEffect(() => {
        fetch(`https://assignment10-server-one.vercel.app/courses`)
            .then(res => res.json())
            .then(data => {
                setAllcourses(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loder />
    }

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
                        allCourse.map(course => <SingleCourse key={course._id} course={course} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;