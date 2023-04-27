import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./bannerThree.module.scss"

const BannerThree = () => {
    return (
        <section className={cls.banner}>
            <Container maxWidth="xl" >
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <div className={cls.card}>
                            <div className={cls.cardBody}>
                                <h3>Become an Instructor</h3>
                                <p>Teach what you love. Dove Schooll gives you the tools to create an online course.</p>
                                <Link href="#">START TEACHING</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className={cls.card}>
                            <div className={cls.cardBody}>
                                <h3>Dove School For Business</h3>
                                <p>Get unlimited access to 5,200 of Skola top courses for your team.</p>
                                <Link href="#">DOING BUSINESS</Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default BannerThree