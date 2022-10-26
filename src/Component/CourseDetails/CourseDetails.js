import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
// import CommentCard from "./CommentCard/CommentCard";

const CourseDetails = () => {
    const lodedCourse = useLoaderData()
    const course = {
        _id: "0282e0e58a5c404fbd15261f11c2ab6b",
        name: "Data Science Fundamental Course",
        category_id: "03",
        category_name: "Data Science",
        rating: {
            number: 4.5,
            badge: "Excellent",
            total: "25",
        },
        total_view: 488,
        published_date: "2022-08-24 17:27:34",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMz-TXof73PLOzZSPj1wSh4J2gLUNM4-xVg&usqp=CAU",
        description:
            "Data science is an interdisciplinary field[8] focused on extracting knowledge from typically large data sets and applying the knowledge and insights from that data to solve problems in a wide range of application domains.[9] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics, information science, mathematics, data visualization, information visualization, data sonification, data integration, graphic design, complex systems, communication and business.[10][11] Statistician Nathan Yau, drawing on Ben Fry, also links data science to human–computer interaction: users should be able to intuitively control and explore data.[12][13] In 2015, the American Statistical Association identified database management, statistics and machine learning, and distributed and parallel systems as the three emerging foundational professional communities.[14] Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[15] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[16] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data (e.g. from images, text, sensors, transactions or customer information, etc) and emphasizes prediction and action.[17] Andrew Gelman of Columbia University has described statistics as a nonessential part of data science.[18] Stanford professor David Donoho writes that data science is not distinguished from statistics by the size of datasets or use of computing and that many graduate programs misleadingly advertise their analytics and statistics training as the essence of a data-science program. He describes data science as an applied field growing out of traditional statistics.[19]",
        instructor: {
            name: "Mosharrof Hosen Munna",
            profile: "https://placeimg.com/192/192/people",
            update: "July 24, 2022",
            star: "4.5",
        },
        reviews: [
            {
                name: "Eleanor Fant",
                profile: "https://placeimg.com/192/192/people",
                comment:
                    "So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
                date: "July 14, 2022",
                rating: "4",
            },
            {
                name: "Shahnewaz Sakil",
                profile: "https://placeimg.com/192/192/people",
                comment:
                    "David blatant have it, standard A bit of how's your father my lady absolutely.",
                date: "July 14, 2022",
                rating: "4",
            },
        ],
    };


    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/course-category`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

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
                    <button className="btn btn-outline btn-primary btn-sm font-bold shadow-md">
                        Chekout
                    </button>
                </div>
                {/* course thumbnail */}
                <div>
                    <img className="w-full" src={course.img} alt="" />
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
                    {course.description.slice(0, 350)} <br /> <br />{" "}
                    {course.description.slice(350, 700)} <br /> <br />{" "}
                    {course.description.slice(700)}
                </div>
                <div className="flex justify-end">
                    <button className="btn  btn-primary btn-md font-bold shadow-md">
                        Chekout Course{" "}
                    </button>
                </div>
                {/* reviews and comment */}
                <div>
                    <div>
                        <h1 className="text-3xl text-primary font-semibold mb-4">Reviews</h1>
                        <div className="flex justify-between items-center">
                            <h5 className="text-xl font-semibold ">
                                Badge: {course.rating.badge}
                            </h5>
                            <div className="flex items-center text-rose-600">
                                <div className="text-xl font-semibold text-black">Rating: </div>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span className="text-black font-semibold">
                                    ({course.rating.number})
                                </span>
                            </div>
                            <h5 className="text-xl font-semibold ">
                                Total Reviews: {course.rating.total}
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

                    <div>
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;