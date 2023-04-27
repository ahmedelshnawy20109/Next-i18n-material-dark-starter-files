import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";


import cls from "./introBannerFive.module.scss"


const IntroBannerFive = () => {

    return (
        <section className={cls.intro}>
            <Container maxWidth="xl" className={cls.introContent}>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={5} lg={5} order={{ md: 2 }} className={cls.bannerImg}>
                        <img src="./imgs/IntroBanner/illustration-5.svg" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />
                    </Grid>
                    <Grid item xs={12} md={7} lg={7} order={{ md: 1 }}>
                        <h1>
                            Learn on your <b>Schedule</b>
                        </h1>

                        <p>
                            Technology is bringing a massive wave of evolution on learning things in different ways.
                        </p>

                        <Link href="#" className={cls.btn}>GET STARTED</Link>
                        <Link href="#" className={cls.btn}>VIEW COURSES</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default IntroBannerFive;