import Link from "next/link.js";
import React from "react";

import cls from './categoryFour.module.scss';

const CategoryFour = () => {
    return (
        <Link href="#" className={cls.category}>
            <div className={cls.iconContainer}>
                <div className={cls.icon}>
                    <i className="fas fa-bezier-curve"></i>
                </div>

            </div>

            <div className={cls.cardFooter}>
                <h5 className="mb-0 line-clamp-1">Design</h5>
            </div>
        </Link>
    )
}

export default CategoryFour;