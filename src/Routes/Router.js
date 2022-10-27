import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import CategoryCourses from "../Component/CategoryCourses/CategoryCourses";
import CheckOut from "../Component/CheckOut/CheckOut";
import CourseDetails from "../Component/CourseDetails/CourseDetails";
import Courses from "../Component/Courses/Courses";
import Faqs from "../Component/Faqs/Faqs";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "/courses",
                loader: () => fetch(`http://localhost:5000/courses`),
                element: <Courses />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/faqs',
                element: <Faqs />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/course-category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course-category/${params.id}`),
                element: <CategoryCourses />
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails />
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            }
        ]
    }
])
export default router