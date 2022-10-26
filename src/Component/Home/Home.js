import React from 'react';
import banner1 from '../../Assets/Images/banner-bg-1.jpg'
import banner2 from '../../Assets/Images/banner-bg-2.jpg'
import img1 from '../../Assets/Images/img-1.png'
import img2 from '../../Assets/Images/img-2.png'
import headerImg from '../../Assets/Images/header-img.png'
import './Home.css'
import Explore from '../Explore/Explore';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <section className="py-24 px-4" >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 g-4">
                        <div className="flex items-center">
                            <div>
                                <div className="text-6xl">
                                    Access 2700+ <br />{" "}
                                    <span className="font-bold">
                                        Online Tutorial From Top Instructor.
                                    </span>
                                </div>
                                <p className="text-2xl my-8">
                                    Meet university,and cultural institutions, who'll share their
                                    experience.
                                </p>
                                <button className="btn btn-primary btn-lg">
                                    View All Courses
                                </button>
                            </div>
                        </div>
                        <div className="mx-auto text-center">
                            <img className="w-4/6 rounded-lg mx-auto" src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Explore />


            <section className='w-1/2 mx-auto mb-10 flex gap-5'>
                <section className='my-clasroom flex justify-between items-center p-10 rounded-2xl' style={{ backgroundImage: `url(${banner1})` }}>
                    <div>
                        <div className='bg-pink-500 w-12 text-white rounded-full text-center'>
                            <p>free</p>
                        </div>
                        <h1>Feel Free To enroll our latest free courses for Limited times only</h1>
                        <button className='btn btn-primary'>View Courses</button>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </section>
                <section className='flex justify-between items-center p-10 rounded-2xl' style={{ backgroundImage: `url(${banner2})` }}>
                    <div>
                        <div className='bg-orange-600 w-12 text-white rounded-full text-center'>
                            <p>new</p>
                        </div>
                        <h1>Enroll Our Latest Courses Created By One Of The Best Teacher's</h1>
                        <button className='btn btn-primary'>Find Our More</button>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default Home;