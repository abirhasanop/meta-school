import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../Assets/Images/header-img.png'

const Faqs = () => {
    return (
        <div>
            <section className="py-24 px-4" >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1  md:grid-cols-2 g-4">
                        <div className="flex items-center">
                            <div>
                                <div className="text-6xl  text-center lg:text-left ">
                                    Access 2700+ <br />{" "}
                                    <span className="font-bold">
                                        Online Tutorial From Top Instructor.
                                    </span>
                                </div>
                                <p className="text-2xl text-center lg:text-left my-8">
                                    Learn Digital Marketing Today!
                                </p>
                                <div className='flex justify-center lg:justify-start'>
                                    <Link to='/courses'>
                                        <button className="btn btn-primary btn-lg">
                                            View All Courses
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto text-center">
                            <img className="w-4/6 rounded-lg mx-auto" src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className='container mx-auto mb-20'>
                <h1 className='text-6xl font-semibold text-indigo-700 text-center my-5'>FAQs</h1>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What are the payment method?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>You Can pay us by PayPal, Bkash and through bank</p>
                    </div>
                </div>
                <div className="collapse my-3">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        How Long This These courses last averagely?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Average all courses lasts for 6 month</p>
                    </div>
                </div>
                <div className="collapse my-3">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Is any free tryal available?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Yeah, You enjoy first 5 videos of every course</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faqs;