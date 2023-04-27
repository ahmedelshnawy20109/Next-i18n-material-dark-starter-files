
import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./introBannerThree.module.scss"


const IntroBannerThree = () => {

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
                            <img src="./imgs/IntroBanner/illustration-4.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />
                        </Grid>
                        <Grid item xs={12} md={7} lg={6} order={{ md: 1 }}>
                            <h1>
                                More Than 48.259  <span>Online Courses</span>
                            </h1>

                            <form>
                                <div className={cls.inputGroup}>
                                    <div className={cls.inputGroupPrepend}>
                                        <span class="input-group-text border-right-0 text-primary icon-xs rounded-left-xl">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="currentColor"></path>
                                                <path d="M19.762 18.6121L15.1007 13.9509C14.7831 13.6332 14.2687 13.6332 13.9511 13.9509C13.6335 14.2682 13.6335 14.7831 13.9511 15.1005L18.6124 19.7617C18.7712 19.9205 18.9791 19.9999 19.1872 19.9999C19.395 19.9999 19.6032 19.9205 19.762 19.7617C20.0796 19.4444 20.0796 18.9295 19.762 18.6121Z" fill="currentColor"></path>
                                            </svg>

                                        </span>
                                    </div>
                                    <input type="search" class="form-control ps-2 border-left-0 rounded-right-xl border-0" placeholder="Search for a job" />
                                </div>
                            </form>

                            <p> Trending Search: Development, Business, Design, Merketing </p>

                        </Grid>
                    </Grid>
                </Container>
                <div className={cls.shapeBottom}>
                    <svg viewBox="0 0 1920 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M0,229l1920,0V-0.4c0,25.8-19.6,47.3-45.2,49.8L54.8,223.8C25.4,226.6,0,203.5,0,174V229z"></path>
                    </svg>

                </div>
            </section>
        </MouseParallaxContainer>
    )
}

export default IntroBannerThree;