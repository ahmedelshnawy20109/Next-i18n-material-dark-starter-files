import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Navigation } from "swiper";

import CategoryTwo from "./CategoryTwo";

import 'swiper/css';
import "swiper/css/navigation";
import cls from "./categoriesTwo.module.scss"



const CategoriesTwo = () => {
    const navigation = {
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
                    loop={true}
                    spaceBetween={20}
                    navigation={navigation}
                    modules={[Navigation]}
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
                        <CategoryTwo color="#B94EE4" bg="#f0e7f3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryTwo color="#F55101" bg="#fcefe9" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryTwo color="#00D1EB" bg="#ebf8f9" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryTwo color="#F15571" bg="#f6e7e9" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryTwo color="#B94EE4" bg="#f0e7f3"/>
                    </SwiperSlide>
                </Swiper>
            </Container>

        </section>
    )
}

export default CategoriesTwo;