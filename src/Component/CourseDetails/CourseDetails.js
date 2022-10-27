import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
// import CommentCard from "./CommentCard/CommentCard";

const CourseDetails = () => {
    const lodedCourse = useLoaderData()
    console.log(lodedCourse);



    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/course-category`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    const handleSubmitReview = (event) => {
        event.preventDefault()
        const form = event.target
        form.reset()
        toast.success("Your Comment is under review")
    }

    return (
        <div className="container mx-auto courese-container mt-10">
            <div className='my-categories bg-white rounded-xl'>
                {
                    categories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
            {/* course header */}
            <section>
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-semibold text-primary">{lodedCourse.name}</h1>
                    <Link to={`/checkout/${lodedCourse._id}`}>
                        <button className="btn btn-outline btn-primary btn-sm font-bold shadow-md">
                            Chekout
                        </button>
                    </Link>
                </div>
                {/* course thumbnail */}
                <div>
                    <img className="w-full" src={lodedCourse.img} alt="" />
                </div>
                {/* course info */}
                <div className="flex justify-between items-center">
                    {/* <div className="my-8 flex items-center">
                        <div className="avatar mr-4 ">
                            <div className="w-14 rounded-full">
                                <img src={lodedCourse.img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-samibold">Instructor</h3>
                            <h4 className="text-xl font-bold">{course.instructor.name}</h4>
                        </div>
                    </div> */}
                    {/* rating */}
                    <div>
                        <h5 className="text-lg font-semibold ">Instructor Rating: </h5>
                        <div className="flex items-center text-rose-600">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <span className="text-black font-semibold">
                                ({lodedCourse.rating.number})
                            </span>
                        </div>
                    </div>
                </div>
                {/* course description */}
                <div className="text-lg leading-8	 mb-8">
                    {lodedCourse.description.slice(0, 350)} <br /> <br />{" "}
                    {lodedCourse.description.slice(350, 700)} <br /> <br />{" "}
                    {lodedCourse.description.slice(700)}
                </div>
                <div className="flex justify-end">
                    <Link to={`/checkout/${lodedCourse._id}`}>
                        <button className="btn  btn-primary btn-md font-bold shadow-md">
                            Chekout Now
                        </button>
                    </Link>
                </div>
                {/* reviews and comment */}
                <div>
                    <div>
                        <h1 className="text-3xl text-primary font-semibold mb-4">Reviews</h1>
                        <div className="flex justify-between items-center">
                            <h5 className="text-xl font-semibold ">
                                Badge: {lodedCourse.rating.badge}
                            </h5>
                            <div className="flex items-center text-rose-600">
                                <div className="text-xl font-semibold text-black">Rating: </div>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="text-black font-semibold">
                                    ({lodedCourse.rating.number})
                                </span>
                            </div>
                            <h5 className="text-xl font-semibold ">
                                Total Reviews: {lodedCourse.total_view}
                            </h5>
                        </div>
                    </div>

                    {/* <div>
                    <h1 className="text-3xl text-primary font-semibold mt-8 mb-4">
                        Comments
                    </h1>
                    {course.reviews.map((reviews) => {
                        return <CommentCard comment={reviews} />;
                    })}
                </div> */}
                </div>
                {/* write review */}
                <div>
                    <h1 className="text-3xl text-primary my-8 font-semibold">Write a Review</h1>

                    <form onSubmit={handleSubmitReview}>
                        <div className="grid grid-cols-2">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input w-full max-w-lg  shadow"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input w-full max-w-lg shadow"
                                />
                            </div>
                        </div>
                        <div className="w-full my-4">
                            <textarea className="textarea w-full shadow" rows={8} placeholder="Write your comment"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-primary">Submit Review</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;