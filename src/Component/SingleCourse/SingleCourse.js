import React from 'react';
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SingleCourse = ({ course }) => {
    const { name, img, rating, total_view, _id, price } = course
    return (
        <div className="card rounded-lg card-compact w-96 bg-base-100 shadow-xl mb-5">
            <img className='image-full' src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className=''>
                    <div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {rating.number}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Badge: {rating.badge}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Enrolled: {total_view}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-lg font-semibold text-pink-500'>Price: {price}</h2>
                        </div>
                        <div className='flex justify-center'>
                            <FaStar className='mr-2 text-yellow-400 text-base' />
                            <FaStar className='mr-2 text-yellow-400 text-base' />
                            <FaStar className='mr-2 text-yellow-400 text-base' />
                            <FaStarHalfAlt className='text-yellow-400' />
                        </div>
                    </div>
                </div>
                <div className="card-actions w-full">

                    <Link className='w-full' to={`/courses/${_id}`}>
                        <button className="btn btn-primary w-full">Show Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SingleCourse;