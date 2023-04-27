import Link from "next/link";
import React from "react";

import cls from "./instructorOne.module.scss"

const InstructorOne = () => {
    return (
        <div className={cls.instructor}>
            <div className={cls.cardZoom}>
                <div className={cls.cardFloat}>
                    <ul className={cls.nav}>
                        <li>
                            <Link href="#" className="d-block text-white">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link href="#" className={cls.cardImg}>
                    <img src="./imgs/instructors/instructor-1.jpg" alt="..." />
                </Link>
            </div>

            <div className={cls.cardFooter}>
                <a href="#">
                    <h5 className="mb-0">Anna Richard</h5>
                </a>
                <span>Travel Bloger</span>
            </div>
        </div>
    )
}

export default InstructorOne