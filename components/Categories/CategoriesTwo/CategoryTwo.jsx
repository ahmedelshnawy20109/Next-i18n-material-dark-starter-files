import Link from "next/link.js";
import React from "react";

import cls from './categoryTwo.module.scss';

const CategoryTwo = (props) => {
    return (
        <Link href="#" className={cls.category}>
            <div className={cls.iconContainer}>
                <div className={cls.icon} style={{ color: props.color }}>
                    <i className="fas fa-bezier-curve"></i>
                </div>
                <svg style={{ color: props.color }} width="116" height="82" viewBox="0 0 116 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9238 65.8391C11.9238 65.8391 20.4749 72.4177 35.0465 70.036C49.6182 67.6542 75.9897 78.4406 75.9897 78.4406C75.9897 78.4406 90.002 85.8843 104.047 79.2427C118.093 72.6012 115.872 58.8253 115.872 58.8253C115.743 56.8104 115.606 46.9466 97.5579 22.0066C91.0438 13.0024 84.1597 6.97958 75.9458 3.74641C58.8245 -2.99096 37.7881 -0.447684 22.9067 9.81852C15.5647 14.8832 7.65514 22.0695 3.0465 31.5007C-7.27017 52.6135 11.9238 65.8391 11.9238 65.8391Z" fill="currentColor"></path>
                </svg>

            </div>

            <div className={cls.cardFooter}>
                <h5 className="mb-0 line-clamp-1">Design</h5>
                <p className="mb-0 line-clamp-1">Over 960 Courses</p>
            </div>
        </Link>
    )
}

export default CategoryTwo;