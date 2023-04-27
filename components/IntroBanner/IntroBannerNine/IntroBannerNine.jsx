import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from "swiper";
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import CourseNine from "./CourseNine";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cls from "./introBannerNine.module.scss"

const IntroBannerNine = () => {
    const pagination = {
        clickable: true,
    };
    const navigation = {
    };
    return (
        <section className={cls.intro}>
            <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={0}
                effect={"fade"}
                navigation={navigation}
                pagination={pagination}
                modules={[EffectFade, Navigation, Pagination]}
            >
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-1.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center">
                                    <Grid item lg={7} md={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Self EducatIon Resources and Infos
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                        <Link href="#" className={cls.btnPrimary}>VIEW COURSES</Link>

                                    </Grid>
                                    <Grid item lg="auto" md={6} xs={12} className={cls.course}>
                                        <CourseNine />
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-4.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center">
                                    <Grid item lg={7} md={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Self EducatIon Resources and Infos
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                        <Link href="#" className={cls.btnPrimary}>VIEW COURSES</Link>

                                    </Grid>
                                    <Grid item lg="auto" md={6} xs={12} className={cls.course}>
                                        <CourseNine />
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-7.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center">
                                    <Grid item lg={7} md={6} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Self EducatIon Resources and Infos
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                        <Link href="#" className={cls.btnPrimary}>VIEW COURSES</Link>

                                    </Grid>
                                    <Grid item lg="auto" md={6} xs={12} className={cls.course}>
                                        <CourseNine />
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}
export default IntroBannerNine;