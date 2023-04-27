import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import CountUp from 'react-countup';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


import cls from "./countUpFour.module.scss"

const CountUpFour = () => {
    return (
        <section className={cls.countUp}>
            <MouseParallaxContainer>
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
                <Container maxWidth="xl">
                    <Grid container alignItems="center">
                        <Grid item md={8} xs={12} className={cls.count}>
                            <h4>HELLO THERE</h4>
                            <h1>My name is Jessica John</h1>
                            <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great.
                            </p>
                            <Grid container >
                                <Grid item md={3}>
                                    <CountUp
                                        end={749}
                                        duration={5}
                                        enableScrollSpy={true} />
                                    <p className={cls.label}>Creative Events</p>
                                </Grid>
                                <Grid item md={3}>
                                    <CountUp
                                        end={853}
                                        duration={5}
                                        enableScrollSpy={true} />
                                    <p className={cls.label}>Skilled Tutors</p>
                                </Grid>
                                <Grid item md={3}>
                                    <CountUp
                                        end={28}
                                        duration={5}
                                        enableScrollSpy={true}
                                        suffix=" k+" />
                                    <p className={cls.label}>Online Courses</p>
                                </Grid>
                                <Grid item md={3}>
                                    <CountUp
                                        end={53}
                                        duration={5}
                                        enableScrollSpy={true}
                                        suffix=" k+" />
                                    <p className={cls.label}>People Worldwide</p>
                                </Grid>
                            </Grid>
                            <Link href="#" className={cls.btn}>READ MORE</Link>
                        </Grid>
                        <Grid item md={4} xs={12} className={cls.img}>
                            <img src="./imgs/photos/photo-12.png" alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </MouseParallaxContainer>
                <div className={cls.shape}>
                    <svg viewBox="0 0 1920 86" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                        <path fill="currentColor" d="M0,86h1920V72.6C1174-69.7,752,34.5,0,72.6L0,86z"></path>
                    </svg>

                </div>
        </section>
    )
}

export default CountUpFour