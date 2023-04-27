import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./tweet.module.scss"

const Tweet = () => {
    const pagination = {
        clickable: true,
    };
    return (
        <div className={cls.tweet}>
            <h3 className={cls.header}>Our Latest Tweets</h3>
            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={0}
                pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide>
                        <div className={cls.iconContainer}>
                            <i className="fab fa-twitter"></i>
                        </div>
                        <a href="#">@Skola</a>
                        <p>Getting the necessary clarity about the current state to help you improve your game.</p>
                        <span>06 April 2020</span>
                </SwiperSlide>
                <SwiperSlide>
                        <div className={cls.iconContainer}>
                            <i className="fab fa-twitter"></i>
                        </div>
                        <a href="#">@Skola</a>
                        <p>Getting the necessary clarity about the current state to help you improve your game.</p>
                        <span>06 April 2020</span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Tweet;