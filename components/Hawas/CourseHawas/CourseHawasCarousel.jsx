import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import CourseHawas from "./CourseHawas";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./courseHawasCarousel.module.scss"


const CourseHawasCarousel = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <MouseParallaxContainer>
            <section className={cls.courses}>
                <div className={cls.parallaxCursor}>
                    <MouseParallaxChild factorX={0.03} factorY={0.05} >
                        <img className="img-fluid" src="./imgs/parallax/layer-20.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.04} factorY={0.06} >
                        <img className="img-fluid" src="./imgs/parallax/layer-21.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.05} factorY={0.07} >
                        <img className="img-fluid" src="./imgs/parallax/layer-22.svg" alt="Layer" />
                    </MouseParallaxChild>
                </div>
                <Container maxWidth="xl">
                    <Grid container className={cls.header} alignItems="center" >
                        <Grid item md xs={12}>
                            <h1 className="mb-1">دورات مميزة</h1>
                            <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
                        </Grid>
                    </Grid>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={20}
                        pagination={pagination}
                        modules={[Pagination]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <CourseHawas img={"./imgs/hawas/product-17.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseHawas img={"./imgs/hawas/product-18.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseHawas img={"./imgs/hawas/product-19.jpg"}/>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </MouseParallaxContainer>
    )
}

export default CourseHawasCarousel;