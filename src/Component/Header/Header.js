import React from 'react';
import { useContext } from 'react';
import { FaHive, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className='bg-white shadow-xl mb-24 h-24 flex items-center'>
            <div className="navbar lg:container mx-auto flex flex-col lg:flex-row">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-4xl"><FaHive className='mr-1 text-indigo-600' /> Meta  <span className='text-indigo-600'> School</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 flex items-center">

                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to='/faqs'>FAQs</Link></li>

                        {
                            user?.uid ?
                                <>
                                    <li onClick={logOut}><Link to="/signup">LogOut</Link></li>
                                    <li className='mr-4'>{user?.displayName}</li>
                                </>
                                :
                                <><li><Link to="/login">Login</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                </>
                        }
                        {
                            user?.photoURL ?
                                <div className="tooltip tooltip-bottom tooltip-success flex items-center" data-tip={`${user?.displayName}`}>
                                    <img className='rounded-full' style={{ height: "40px", width: "40px" }} src={user?.photoURL} alt="" />
                                </div>
                                :
                                <FaUser className='hidden lg:block' />
                        }
                        {/* <div className="tooltip tooltip-bottom tooltip-success flex items-center" data-tip={`${user?.displayName}`}>
                            {
                                user?.photoURL ?
                                    <img className='rounded-full' style={{ height: "40px", width: "40px" }} src={user?.photoURL} alt="" />
                                    :
                                    <FaUser />
                            }
                        </div> */}
                        <input type="checkbox" className="toggle ml-3 hidden lg:block" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;