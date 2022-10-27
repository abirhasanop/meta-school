import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const CheckOut = () => {
    const lodedCourse = useLoaderData()
    const { img, name, rating, published_date, total_view, price } = lodedCourse
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://assignment10-server-one.vercel.app/course-category`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    const handleEnroll = (event) => {
        event.preventDefault()
        const form = event.target
        form.reset()
        toast.success("Enrolled")
    }






    return (
        <div className='container mx-auto courese-container my-10'>
            <section className='my-categories bg-white rounded-xl'>
                {
                    categories.map(category => <Category key={category.id} category={category} />)
                }
            </section>
            <section className='bg-white'>
                <div className='lg:flex justify-between pr-24'>
                    <div>
                        <img style={{ width: "600px" }} src={img} alt="" />
                    </div>
                    <div>
                        <h3 className=' mt-4 text-5xl font-semibold'>{name}</h3>
                        <h4 className=' mt-4 text-xl font-semibold'>Badge: {rating.badge}</h4>
                        <h4 className=' mt-4 text-xl font-semibold'>Rating: {rating.number}</h4>
                        <h3 className=' mt-4 text-xl font-semibold'>Total Enrolled: {total_view}</h3>
                        <p className='mt-3'>Published Date: {published_date}</p>
                        <h2 className='text-4xl font-semibold mt-10 text-pink-500'>Price: ${price}</h2>
                    </div>
                </div>
                <div>
                    <h1 className='text-5xl text-purple-700 text-center font-semibold my-5'>Enroll Today</h1>
                </div>
                <form onSubmit={handleEnroll} className='w-3/4 mx-auto'>
                    <input type="text" placeholder="Name" className="input input-bordered w-full mt-2" />
                    <input type="email" placeholder="email" className="input input-bordered w-full mt-2" />
                    <input type="text" placeholder="Phone" className="input input-bordered w-full mt-2" />
                    <input type="text" placeholder="Payment Method" className="input input-bordered w-full mt-2" />
                    <textarea className="textarea textarea-bordered w-full mt-2" placeholder="Feel Free To Ask Any Thing"></textarea>
                    <div className='flex justify-center mt-5'>
                        <button className='btn btn-primary mx-auto '>Enroll Now</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CheckOut;