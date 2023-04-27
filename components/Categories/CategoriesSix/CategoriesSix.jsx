import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import React from "react";

import cls from "./categoriesSix.module.scss"
import Link from "next/link";
import CategorySix from "./CategorySix";

const CategoriesSix = () => {
    return (
        <section className={cls.categories}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center">
                    <Grid item md >
                        <h1>Trending Categories</h1>
                        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-3.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-4.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-5.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-6.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-7.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-8.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-9.jpg" />
                    </Grid>
                    <Grid item md={4} lg={3} xs={6}>
                        <CategorySix bgImg="./imgs/photos/photo-10.jpg" />
                    </Grid>
                    <Grid item xs={12} className={cls.btnContent}>
                        <Link href="#" className={cls.btn}>VIEW All COURSES</Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default CategoriesSix;