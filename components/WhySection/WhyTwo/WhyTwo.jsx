import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./whyTwo.module.scss"

const WhyTwo = () => {
    return (
        <section className={cls.why}>
            <Container maxWidth="xl" className={cls.container}>
                <div className={cls.header}>
                    <h1>Know why we are best</h1>
                    <p>Discover your perfect program in our courses.</p>
                </div>

                <ul className={cls.nav}>
                    <li>
                        <Link href="#"><span className={cls.fontXxl}>01</span><span className={cls.fontLg}>Creating a Better Future for you</span></Link>
                    </li>

                    <li>
                        <Link href="#"><span className={cls.fontXxl}>02</span><span className={cls.fontLg}>Learn why eLearny is Best</span></Link>
                    </li>

                    <li>
                        <Link href="#"><span className={cls.fontXxl}>03</span><span className={cls.fontLg}>Our Simple &amp; Effective Process</span></Link>
                    </li>
                </ul>

                <Grid container spacing={3}>
                    <Grid item lg={6} order={{ lg: 2 }}>
                        <img src="./imgs/covers/cover-4.jpg" alt="..." />
                    </Grid>
                    <Grid item lg={6} order={{ lg: 1 }}>
                        <h3>The Prodigious eLearning Courses for you</h3>

                        <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                        <ul className={cls.whyList}>
                            <li>Creative Study Pattern</li>
                            <li>Quick Crash Courses</li>
                            <li>Certification Awarded</li>
                            <li>Provided with Experimental Examples</li>
                        </ul>

                        <Link className={cls.btn} href="#">NEW COURSES</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
export default WhyTwo