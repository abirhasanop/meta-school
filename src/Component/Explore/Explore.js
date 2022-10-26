import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { FaDatabase, FaBusinessTime, FaArtstation, FaSmile } from "react-icons/fa";


const Explore = () => {
    const data = [
        {
            id: "01",
            name: "Data Science",
            slogan: 'Data is Everything',
            icon: <FaDatabase className='text-5xl' />
        },
        {
            id: "02",
            name: "Business",
            slogan: 'Improve your business',

            icon: <FaBusinessTime className='text-5xl' />
        },
        {
            id: "03",
            name: "Art & Design",
            slogan: 'Fun & Challenging',

            icon: <FaArtstation className='text-5xl' />
        },
        {
            id: "04",
            name: "Lifestyle",
            slogan: 'New Skills, New You',

            icon: <FaSmile className='text-5xl' />
        },
        {
            id: "05",
            name: "Marketing",
            slogan: 'Improve your business',

            icon: <FaBusinessTime className='text-5xl' />
        },
        {
            id: "06",
            name: 'Finance',
            slogan: 'Fun & Challenging',

            icon: <FaBusinessTime className='text-5xl' />
        }
        ,
        {
            id: "07",
            name: 'Health & Fitness',
            slogan: 'Invest to Your Body',

            icon: <FaBusinessTime className='text-5xl' />
        }
        ,
        {
            id: "08",
            name: 'Music',
            slogan: 'Major or Minor',

            icon: <FaBusinessTime className='text-5xl' />
        }
        ,
        {
            id: "09",
            name: 'Academics',
            slogan: 'High Education Level',

            icon: <FaBusinessTime className='text-5xl' />
        }
    ]
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold">
                        <span className="text-primary mb-4 inline-block"> Explore</span> <br />
                        Our Popular Courses
                    </h1>
                    <div className="text-lg font-semibold cursor-pointer hover:text-primary duration-300">View all Category</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {
                        data.map((c) => {
                            return <CategoryCard category={c}>{c.icon}</CategoryCard>
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Explore;