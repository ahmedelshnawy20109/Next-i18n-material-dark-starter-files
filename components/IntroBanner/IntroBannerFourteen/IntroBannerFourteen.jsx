import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Container, Grid } from "@mui/material";
import Link from "next/link";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./introBannerFourteen.module.scss"

const IntroBannerFourteen = () => {
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
                pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-16.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center" justifyContent="center">
                                    <Grid item lg={8} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Relationships Are Essential for Student Success!
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-14.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center" justifyContent="center">
                                    <Grid item lg={8} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Relationships Are Essential for Student Success!
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
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
                                <Grid container className={cls.content} alignItems="center" justifyContent="center">
                                    <Grid item lg={8} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Relationships Are Essential for Student Success!
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-1.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center" justifyContent="center">
                                    <Grid item lg={8} xs={12} className={cls.innerContent}>
                                        <h1 >
                                            Relationships Are Essential for Student Success!
                                        </h1>

                                        <p>
                                            Technology is brining a massive wave of evolution on learning things on different ways.
                                        </p>

                                        <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
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
export default IntroBannerFourteen;