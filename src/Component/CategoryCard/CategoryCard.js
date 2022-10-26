import React from 'react'

const CategoryCard = ({ children, category }) => {
    return (
        <div className='card shadow-lg p-6 border border-gray hover:bg-primary hover:text-white duration-300 cursor-pointer'>
            <div className='flex justify-start items-center'>
                {children}
                <div className='ml-10'>
                    <h3 className='text-3xl font-bold'>{category.name}</h3>
                    <p className='text-lg'>{category.slogan}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard