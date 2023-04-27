import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./bannerFive.module.scss"

const bannerFive = () => {
    return (
            <section className={cls.banner}>
                <Container className={cls.content} maxWidth="xl">
                    <h1>ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES</h1>
                    <div className={cls.description}>STARTING ONLINE LEARNING</div>
                    <div className={cls.btnContainer}>
                        <Link href="#">GET STARTED NOW</Link>
                    </div>
                </Container>
            </section>
    )
}
export default bannerFive