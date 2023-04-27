import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import Post from "./Post";

import cls from "./newsHawas.module.scss"

const NewsHawas = () => {
    return (
        <section className={cls.News}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center">
                    <Grid item xs >
                        <h1>احدث المقالات</h1>
                        <p>Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post img={"./imgs/post/post-10.jpg"}/>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post img={"./imgs/post/post-11.jpg"} />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post img={"./imgs/post/post-12.jpg"} />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default NewsHawas