import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import TestimonialsSix from "./TestimonialsSix";

import 'swiper/css';
import "swiper/css/pagination";

import cls from "./testimonialsSixCarousel.module.scss"


const TestimonialsSixCarousel = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <section className={cls.testimonials}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center" >
                    <Grid item md xs={12}>
                        <h2 className="mb-1">What our students have to say</h2>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>

                    </Grid>
                </Grid>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={0}
                    pagination={pagination}
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <TestimonialsSix />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsSix />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsSix />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsSix />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsSix />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default TestimonialsSixCarousel;