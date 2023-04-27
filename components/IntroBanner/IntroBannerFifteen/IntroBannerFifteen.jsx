import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Container, Grid } from "@mui/material";
import Link from "next/link";

import 'swiper/css';
import "swiper/css/navigation";
import cls from "./introBannerFifteen.module.scss"

const IntroBannerFifteen = () => {
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
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-25.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center">
                                    <Grid item lg={6} md={7} xs={12} className={cls.innerContent}>
                                        <h5>
                                            Baby Care & Kindergarten School
                                        </h5>
                                        <h1 >
                                            Together We’ll Explore New Things
                                        </h1>

                                        <Link href="#" className={cls.btnPrimary}>LEARN MORE</Link>

                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.intro} style={{ backgroundImage: `url("./imgs/IntroBanner/cover-26.jpg")` }}>
                        <Container maxWidth="xl" className={cls.container}>
                            <div>
                                <Grid container className={cls.content} alignItems="center">
                                    <Grid item lg={6} md={7} xs={12} className={cls.innerContent}>
                                        <h5>
                                            Baby Care & Kindergarten School
                                        </h5>
                                        <h1 >
                                            Together We’ll Explore New Things
                                        </h1>

                                        <Link href="#" className={cls.btnPrimary}>LEARN MORE</Link>

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
export default IntroBannerFifteen;