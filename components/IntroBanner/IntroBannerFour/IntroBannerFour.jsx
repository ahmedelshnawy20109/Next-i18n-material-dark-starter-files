import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";


import cls from "./introBannerFour.module.scss"


const IntroBannerFour = () => {

    return (
        <section className={cls.intro}>
            <Container maxWidth="xl" className={cls.introContent}>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={5} lg={6} order={{ md: 2 }} className={cls.bannerImg}>
                        <img src="./imgs/IntroBanner/illustration-4.svg" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />
                    </Grid>
                    <Grid item xs={12} md={7} lg={6} order={{ md: 1 }}>
                        <h1>
                            We Can Teach You!
                        </h1>

                        <p>
                            Technology is bringing a massive wave of evolution on learning things in different ways.
                        </p>

                        <Link href="#" className={cls.btn}>START A FREE TRIAL</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default IntroBannerFour;