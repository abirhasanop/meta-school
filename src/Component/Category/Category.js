import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, id } = category
    return (
        <div>
            <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                <li><Link to={`/course-category/${id}`}>{name}</Link></li>
            </ul>
        </div>
    );
};

export default Category;