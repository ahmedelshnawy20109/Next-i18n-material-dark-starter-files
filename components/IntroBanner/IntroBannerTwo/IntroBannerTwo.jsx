import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./introBannerTwo.module.scss"


const IntroBannerTwo = () => {

    return (
        <MouseParallaxContainer>
            <section className={cls.intro}>
                <div className={cls.parallaxCursor}>
                    <MouseParallaxChild factorX={0.03} factorY={0.05} >
                        <img className="img-fluid" src="./imgs/parallax/layer-11.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.04} factorY={0.06} >
                        <img className="img-fluid" src="./imgs/parallax/layer-12.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.05} factorY={0.07} >
                        <img className="img-fluid" src="./imgs/parallax/layer-13.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.04} factorY={0.08} >
                        <img className="img-fluid" src="./imgs/parallax/layer-14.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.06} factorY={0.07} >
                        <img className="img-fluid" src="./imgs/parallax/layer-15.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.06} factorY={0.08} >
                        <img className="img-fluid" src="./imgs/parallax/layer-16.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.02} factorY={0.06} >
                        <img className="img-fluid" src="./imgs/parallax/layer-17.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.07} factorY={0.05} >
                        <img className="img-fluid" src="./imgs/parallax/layer-18.svg" alt="Layer" />
                    </MouseParallaxChild>
                </div>
                <Container maxWidth="xl" className={cls.introContent}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={6} className={cls.bannerText}>

                            <h1>
                            Start Investing in <span>You</span>
                            </h1>

                            <p>
                                Technology is bringing a massive wave of evolution on learning things in different ways.
                            </p>

                            <Link href="#" className={cls.btn}>START A FREE TRIAL</Link>
                            <img src="./imgs/IntroBanner/illustration-2.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </MouseParallaxContainer>
    )
}

export default IntroBannerTwo;