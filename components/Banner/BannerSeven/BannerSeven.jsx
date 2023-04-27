import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


import cls from "./bannerSeven.module.scss"

const bannerSeven = () => {
    return (
        <MouseParallaxContainer>

            <section className={cls.banner}>
                <div className={cls.parallaxCursor}>
                    <MouseParallaxChild factorX={0.03} factorY={0.05} >
                        <img className="img-fluid" src="./imgs/parallax/layer-20.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.04} factorY={0.06} >
                        <img className="img-fluid" src="./imgs/parallax/layer-21.svg" alt="Layer" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.05} factorY={0.07} >
                        <img className="img-fluid" src="./imgs/parallax/layer-22.svg" alt="Layer" />
                    </MouseParallaxChild>
                </div>
                <Container className={cls.content} maxWidth="xl">
                    <h1>Call To Enrol Your Child 666 8888 000</h1>
                    <div className={cls.description}>Book Your Seat Now</div>
                    <div className={cls.btnContainer}>
                        <Link href="#">VIEW ALL PROGRAMS</Link>
                    </div>
                </Container>
            </section>
        </MouseParallaxContainer>

    )
}
export default bannerSeven