import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import InfoBox from "./InfoBox";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import cls from "./introBannerThirteen.module.scss"

const IntroBannerThirteen = () => {
    const pagination = {
        clickable: true,
    };
    const navigation = {
    };
    return (
        <section className={cls.introSection}>
            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={0}
                navigation={navigation}
                pagination={pagination}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide className={cls.introSlide} style={{backgroundImage: 'url("./imgs/IntroBanner/cover-14.jpg")'}}>
                    <div className={cls.intro}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content}>
                                    <Grid item lg={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            <span className={cls.bold}>
                                                The Best University
                                            </span>
                                            <span>
                                                Of The State
                                            </span>
                                        </h1>

                                        <p class="text-white-70 text-capitalize mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>APPLY NOW</Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.introSlide} style={{backgroundImage: 'url("./imgs/IntroBanner/cover-7.jpg")'}}>
                    <div className={cls.intro}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content}>
                                    <Grid item lg={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            <span className={cls.bold}>
                                                The Best University
                                            </span>
                                            <span>
                                                Of The State
                                            </span>
                                        </h1>

                                        <p class="text-white-70 text-capitalize mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>APPLY NOW</Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.introSlide} style={{backgroundImage: 'url("./imgs/IntroBanner/cover-4.jpg")'}}>
                    <div className={cls.intro}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content}>
                                    <Grid item lg={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            <span className={cls.bold}>
                                                The Best University
                                            </span>
                                            <span>
                                                Of The State
                                            </span>
                                        </h1>

                                        <p class="text-white-70 text-capitalize mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>APPLY NOW</Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.introSlide} style={{backgroundImage: 'url("./imgs/IntroBanner/cover-1.jpg")'}}>
                    <div className={cls.intro}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content}>
                                    <Grid item lg={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            <span className={cls.bold}>
                                                The Best University
                                            </span>
                                            <span>
                                                Of The State
                                            </span>
                                        </h1>

                                        <p class="text-white-70 text-capitalize mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>APPLY NOW</Link>
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
export default IntroBannerThirteen;