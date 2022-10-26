import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='bg-white shadow-xl mb-24'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">Meta School</Link>
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
                            <img className=' rounded-full' style={{ height: "40px" }} src={user?.photoURL} alt="" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;