import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Pagination } from "swiper";


import InstructorThree from "./InstructorThree";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./instructorsThreeCarousel.module.scss"



const InstructorsThreeCarousel = () => {
    const pagination = {
        clickable: true,
    };
    return (
        <section className={cls.instructors}>
            <Container maxWidth="xl">
                <div className={cls.header}>
                        <h1>Top Rating Instructors</h1>
                        <p>Discover your perfect program in our courses.</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={20}
                    pagination={pagination}
                    modules={[Pagination]}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                        <InstructorThree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstructorThree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstructorThree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstructorThree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InstructorThree />
                    </SwiperSlide>
                </Swiper>
            </Container>

        </section>
    )
}

export default InstructorsThreeCarousel;