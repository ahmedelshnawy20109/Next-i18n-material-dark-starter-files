import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Navigation } from "swiper";

import CourseFour from "./CourseFour";

import 'swiper/css';
import "swiper/css/navigation";
import cls from "./courseFourCarousel.module.scss"



const CourseFourCarousel = () => {
    const navigation = {
    };
    return (
        <section className={cls.categories}>
            <Container maxWidth="xl">
                <div className={cls.header}>
                        <h1>Popular Course</h1>
                        <p>Discover your perfect program in our courses.</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={20}
                    navigation={navigation}
                    modules={[Navigation]}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                        <CourseFour />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseFour />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseFour />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseFour />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseFour />
                    </SwiperSlide>
                </Swiper>
            </Container>

        </section>
    )
}

export default CourseFourCarousel;