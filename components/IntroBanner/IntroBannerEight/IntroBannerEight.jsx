import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./introBannerEight.module.scss"
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import InfoBox from "./InfoBox";

const IntroBannerEight = () => {
    const pagination = {
        clickable: true,
    };
    return (
        <section className={cls.intro}>
            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={0}
                pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className={cls.intro}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content}>
                                    <Grid item xs={12} className={cls.innerContent}>
                                        <h1 class="display-5 fw-medium text-white mb-2 text-uppercase aos-init aos-animate" data-aos="fade-left" data-aos-duration="150">
                                            Transform your life through education
                                        </h1>

                                        <p class="text-white-70 text-capitalize mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                        <Link href="#" className={cls.btnPrimary}>VIEW COURSES</Link>

                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.intro}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content}>
                                    <Grid item xs={12} className={cls.innerContent}>
                                        <h1 class="display-5 fw-medium text-white mb-2 text-uppercase aos-init aos-animate" data-aos="fade-left" data-aos-duration="150">
                                            Transform your life through education
                                        </h1>

                                        <p class="text-white-70 text-capitalize mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                        <Link href="#" className={cls.btnPrimary}>VIEW COURSES</Link>

                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
            </Swiper>
            <InfoBox />
        </section>
    )
}
export default IntroBannerEight;