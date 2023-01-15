import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-100'>
            <div className='container min-h-screen mx-auto bg-white mt-14 shadow-xl rounded-lg p-9'>
                <header>
                    <h1 className='text-5xl text-center mb-5 font-semibold'>About</h1>
                </header>
                <section className='text-xl'>
                    <p>
                        Meta School is course selling platform. People can buy courses according to their need. After clicking on the view courses button or courses button users will be sent to the courses route where they see course and a course category slidebar to navigate between the categories. If any user user click on the show details button he/she will be sent to login page if he is not logged in. I have done Firebase Authintication for login-signup. After login user will be redirect to extact page from where he/she was sent. In course details button user can see the details of course and download the PDF verssion of that course by clicking on generate pdf button. The technologies have used in this application:
                        <ul className='list-disc ml-16'>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>JSX</li>
                            <li>React to pdf</li>
                            <li>react-hot-toast</li>
                            <li>Tailwind</li>
                            <li>react-loader-spinner</li>
                            <li>react-router-dom</li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;