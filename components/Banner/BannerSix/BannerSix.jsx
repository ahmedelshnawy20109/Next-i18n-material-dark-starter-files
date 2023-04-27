import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./bannerSix.module.scss"

const bannerSix = () => {
    return (
            <section className={cls.banner}>
                <Container className={cls.content} maxWidth="xl">
                    <h1>BECOME AN INSTRUCTOR?</h1>
                    <div className={cls.description}>Join thousand of instructors and earn money hassle free!</div>
                    <div className={cls.btnContainer}>
                        <Link href="#">GET STARTED NOW</Link>
                    </div>
                </Container>
            </section>
    )
}
export default bannerSix