import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./bannerFour.module.scss"

const bannerFour = () => {
    return (
            <section className={cls.banner}>
                <Container className={cls.content}>
                    <h1>Get personal learning recommendations</h1>
                    <div className={cls.description}>Enhance your skills with best Online courses</div>
                    <div className={cls.btnContainer}>
                        <Link href="#">GET STARTED NOW</Link>
                    </div>
                </Container>
            </section>
    )
}
export default bannerFour