import { Grid, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./courseFive.module.scss"

const CourseFive = () => {
    return (
        <div className={cls.course}>
            <div className={cls.cardImg}>
                <Link href="#">
                    <img src="./imgs/course/course-1.jpg" alt="..." />
                </Link>

                <span className={cls.badge}>
                    <ins>$415.99</ins>
                </span>
            </div>

            <div className={cls.cardFooter}>
                <Link href="#">
                    <span>Photography</span>
                </Link>
                <div>
                    <Link href="#">
                        <h5 className="line-clamp-2 h-md-48 h-lg-58 me-md-8 me-lg-10 me-xl-4 mb-2">Fashion Photography From Professional</h5>
                    </Link>

                    <Grid container alignItems="center" >
                        <Grid item xs>
                            <ul className={cls.nav}>
                                <li className={cls.navItem}>
                                    <div className={cls.icon}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1947 7.06802L14.6315 7.9985C14.2476 7.31186 13.712 6.71921 13.0544 6.25992C12.8525 6.11877 12.6421 5.99365 12.4252 5.88303C13.0586 5.25955 13.452 4.39255 13.452 3.43521C13.452 1.54098 11.9124 -1.90735e-06 10.0197 -1.90735e-06C8.12714 -1.90735e-06 6.58738 1.54098 6.58738 3.43521C6.58738 4.39255 6.98075 5.25955 7.61414 5.88303C7.39731 5.99365 7.1869 6.11877 6.98502 6.25992C6.32752 6.71921 5.79178 7.31186 5.40787 7.9985L2.8447 7.06802C2.33612 6.88339 1.79688 7.26044 1.79688 7.80243V16.5178C1.79688 16.8465 2.00256 17.14 2.31155 17.2522L9.75312 19.9536C9.93073 20.018 10.1227 20.0128 10.2863 19.9536L17.7278 17.2522C18.0368 17.14 18.2425 16.8465 18.2425 16.5178V7.80243C18.2425 7.26135 17.704 6.88309 17.1947 7.06802ZM10.0197 1.5625C11.0507 1.5625 11.8895 2.40265 11.8895 3.43521C11.8895 4.46777 11.0507 5.30792 10.0197 5.30792C8.98866 5.30792 8.14988 4.46777 8.14988 3.43521C8.14988 2.40265 8.98866 1.5625 10.0197 1.5625ZM9.23844 18.1044L3.35938 15.9703V8.91724L9.23844 11.0513V18.1044ZM10.0197 9.67255L6.90644 8.54248C7.58164 7.51892 8.75184 6.87042 10.0197 6.87042C11.2875 6.87042 12.4577 7.51892 13.1329 8.54248L10.0197 9.67255ZM16.68 15.9703L10.8009 18.1044V11.0513L16.68 8.91724V15.9703Z" fill="currentColor" />
                                        </svg>

                                    </div>
                                    <div className={cls.text}>5 lessons</div>
                                </li>
                            </ul>
                        </Grid>

                        <Grid item xs="auto" className={cls.ratingContainer}>
                            <Rating className={cls.rating} readOnly value={5}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default CourseFive;