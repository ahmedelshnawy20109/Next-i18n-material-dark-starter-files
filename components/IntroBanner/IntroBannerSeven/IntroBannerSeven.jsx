import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";


import cls from "./introBannerSeven.module.scss"


const IntroBannerSeven = () => {

    return (
        <section className={cls.intro}>
            <Container maxWidth="xl">
                <Grid container className={cls.introContent} alignItems="center">
                    <Grid item lg={6} md={5} xs={12} order={{ md: 2 }}>
                        <img src="./imgs/IntroBanner/photo-2.jpg" className={cls.bannerImg} alt="..." />
                    </Grid>
                    <Grid item lg={6} md={7} xs={12} order={{ md: 1 }} className={cls.bannerText}>
                        <h1>Learn Courses <span>Online</span></h1>

                        <p>Technology is bringing a massive wave of evolution on learning things in different ways.</p>

                        <Link href="#" className={cls.btn}>GET STARTED</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default IntroBannerSeven;