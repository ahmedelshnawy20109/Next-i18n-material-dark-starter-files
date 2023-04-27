import { Container, Grid } from "@mui/material";
import React from "react";

import cls from "./whyThree.module.scss"

const WhyThree = () => {
    return (
        <section className={cls.why}>
            <Container maxWidth="xl">
                <Grid container spacing={3} alignItems="center" className={cls.item}>
                    <Grid item md={6} xs={12} order={{ xs: 2 }}>
                        <h2>Learn at your own pace</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.Join millions of people from around the world learning together. Online learning is as easy and natural as chatting.</p>
                    </Grid>
                    <Grid item md={6} xs={12} order={{ xs: 1 }}>
                        <img src="./imgs/post/post-10.png" alt="..." />
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center"  className={cls.item}>
                    <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
                        <h2>Community of opportunities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.Join millions of people from around the world learning together. Online learning is as easy and natural as chatting.</p>
                    </Grid>
                    <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
                        <img src="./imgs/post/post-11.png" alt="..." />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default WhyThree;