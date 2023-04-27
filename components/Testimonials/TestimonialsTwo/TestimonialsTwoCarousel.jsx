import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import TestimonialsTwo from "./TestimonialsTwo";

import 'swiper/css';
import "swiper/css/pagination";

import cls from "./testimonialsTwoCarousel.module.scss"


const TestimonialsTwoCarousel = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <section className={cls.testimonials}>
            <Container maxWidth="xxl">
                <Grid container className={cls.header} alignItems="center" >
                    <Grid item md xs={12}>
                        <h1 className="mb-1">What our students have to say</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>

                    </Grid>
                </Grid>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    pagination={pagination}
                    modules={[Pagination]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }}
                >
                    <SwiperSlide>
                        <TestimonialsTwo />
                    <i class="fa-sharp fa-solid fa-ditto"></i>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsTwo />
                    <i class="fa-sharp fa-solid fa-ditto"></i>

                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsTwo />
                    <i class="fa-sharp fa-solid fa-ditto"></i>

                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsTwo />
                    <i class="fa-sharp fa-solid fa-ditto"></i>

                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialsTwo />
                    <i class="fa-sharp fa-solid fa-ditto"></i>

                    </SwiperSlide>
                </Swiper>
            </Container>

        </section>
    )
}

export default TestimonialsTwoCarousel;