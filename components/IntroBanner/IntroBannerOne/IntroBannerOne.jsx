import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./introBannerOne.module.scss"


const IntroBannerOne = () => {

    return (
        <MouseParallaxContainer>
            <section className={cls.intro}>
                <div className={cls.parallaxCursor}>
                    <MouseParallaxChild factorX={0.03} factorY={0.05} >
                        <img className="img-fluid" src="./imgs/parallax/layer-01.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.04} factorY={0.06} >
                        <img className="img-fluid" src="./imgs/parallax/layer-02.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.05} factorY={0.07} >
                        <img className="img-fluid" src="./imgs/parallax/layer-03.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.04} factorY={0.08} >
                        <img className="img-fluid" src="./imgs/parallax/layer-04.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.06} factorY={0.07} >
                        <img className="img-fluid" src="./imgs/parallax/layer-05.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.06} factorY={0.08} >
                        <img className="img-fluid" src="./imgs/parallax/layer-06.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.02} factorY={0.06} >
                        <img className="img-fluid" src="./imgs/parallax/layer-07.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.07} factorY={0.05} >
                        <img className="img-fluid" src="./imgs/parallax/layer-08.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.03} factorY={0.09} >
                        <img className="img-fluid" src="./imgs/parallax/layer-09.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.07} factorY={0.08} >
                        <img className="img-fluid" src="./imgs/parallax/layer-10.svg" alt="Layer" />
                    </MouseParallaxChild>
                </div>
                <Container maxWidth="xl" className={cls.introContent}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={5} lg={6} order={{ md: 2 }} className={cls.bannerImg}>
                            <img src="./imgs/IntroBanner/illustration-1.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />
                        </Grid>
                        <Grid item xs={12} md={7} lg={6} order={{ md: 1 }}>
                            <h1>
                                Learn From <span className="text-orange fw-bold">Anywhere</span>
                            </h1>

                            <p>
                                Technology is bringing a massive wave of evolution on learning things in different ways.
                            </p>

                            <Link href="#" className={cls.btnSlide}>GET STARTED</Link>
                            <Link href="#" className={cls.btnPrimary}>VIEW COURSES</Link>

                        </Grid>
                    </Grid>
                </Container>
            </section>
        </MouseParallaxContainer>
    )
}

export default IntroBannerOne;