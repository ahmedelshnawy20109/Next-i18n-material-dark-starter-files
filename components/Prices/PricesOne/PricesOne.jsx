import { Container, Grid } from "@mui/material";
import React from "react";
import PriceOne from "./PriceOne";

import cls from "./pricesOne.module.scss"

const PricesOne = () => {
    return (
        <section className={cls.prices}>
            <Container maxWidth="xl">
                <div className={cls.header}>
                    <h1>Our Study Prices</h1>
                    <p>Discover your perfect program in our courses.</p>
                </div>
                <Grid container spacing={3}>
                    <Grid item md={6} lg={4} xs={12}>
                        <PriceOne />
                    </Grid>
                    <Grid item md={6} lg={4} xs={12}>
                        <PriceOne />
                    </Grid>
                    <Grid item md={6} lg={4} xs={12}>
                        <PriceOne />
                    </Grid>
                </Grid>

            </Container>
        </section>
    )
}

export default PricesOne;