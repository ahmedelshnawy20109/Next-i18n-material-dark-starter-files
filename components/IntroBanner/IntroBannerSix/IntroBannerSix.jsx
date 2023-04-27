import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";


import cls from "./introBannerSix.module.scss"


const IntroBannerSix = () => {

    return (
        <section className={cls.intro}>
            <div className={cls.vector}>
                <img src="./imgs/IntroBanner/illustration-7.svg" alt="..." />
            </div>
            <Container maxWidth="xl" className={cls.introContent}>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={5} lg={6} order={{ md: 2 }} className={cls.bannerImg}>
                        <img src="./imgs/IntroBanner/illustration-5.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />
                    </Grid>
                    <Grid item xs={12} md={7} lg={6} order={{ md: 1 }}>
                        <h1>
                            Find The Best <span>Courses</span>
                        </h1>

                        <p>
                            Technology is bringing a massive wave of evolution on learning things in different ways.
                        </p>

                        <Link href="#" className={cls.btn}>VIEW COURSES</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default IntroBannerSix;