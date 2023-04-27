import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Pagination } from "swiper";

import CategoryFive from "./CategoryFive";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./categoriesFive.module.scss"



const CategoriesFive = () => {
    const pagination = {
        clickable: true,

    };
    return (
        <section className={cls.categories}>
            <Container maxWidth="xl">
                <div className={cls.header}>
                        <h1>Trending Categories</h1>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={false}
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
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                        <CategoryFive bgColor="#F0D078"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#3c5799"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#327ffe"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#f36756"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#ed50e7"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#00D1EB"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#F15571"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryFive bgColor="#f1763a"/>
                    </SwiperSlide>
                </Swiper>
            </Container>

        </section>
    )
}

export default CategoriesFive;