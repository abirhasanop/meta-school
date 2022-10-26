import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='bg-white shadow-xl mb-24 flex items-center'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-4xl">Meta  <span className='text-indigo-600'> School</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 flex items-center">

                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li onClick={logOut}><Link to="/signup">LogOut</Link></li>

                                </>
                                :
                                <><li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                </>
                        }
                        <div className="tooltip tooltip-bottom tooltip-success flex items-center" data-tip={`${user?.displayName}`}>
                            {
                                user?.photoURL ?
                                    <img className='rounded-full' style={{ height: "40px" }} src={user?.photoURL} alt="" />
                                    :
                                    <FaUser />
                            }

                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;