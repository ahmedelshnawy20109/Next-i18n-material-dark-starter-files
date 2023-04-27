import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import Post from "../NewsOne/Post";

import cls from "./newsTwo.module.scss"

const NewsTwo = () => {
    return (
        <section className={cls.News}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center">
                    <Grid item md >
                        <h1>Latest News</h1>
                        <p>Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default NewsTwo