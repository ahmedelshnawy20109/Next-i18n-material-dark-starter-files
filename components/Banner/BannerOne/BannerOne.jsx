import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./bannerOne.module.scss"

const bannerOne = () => {
    return (
        <MouseParallaxContainer>
            <section className={cls.banner}>
                <div className={cls.parallaxCursor}>
                    <MouseParallaxChild factorX={0.10} factorY={0.16} >
                        <img className="img-fluid" src="./imgs/parallax/illustration-1.jpg" alt="Layer" />
                    </MouseParallaxChild>
                </div>
                <div className={cls.content}>
                    <h1>Get personal learning recommendations</h1>
                    <div className={cls.description}>Enhance your skills with best Online courses</div>
                    <div className={cls.btnContainer}>
                        <Link href="#">GET STARTED NOW</Link>
                    </div>
                </div>
            </section>
        </MouseParallaxContainer>
    )
}
export default bannerOne