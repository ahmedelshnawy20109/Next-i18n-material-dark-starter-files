import { Container, Grid } from "@mui/material";
import React from "react";
import Newsletter from "./Newsletter";
import Tweet from "./Tweet";

import cls from "./tweets.module.scss"

const Tweets = () => {
    return (
        <section className={cls.tweets}>
            <Container maxwidth="xl" >
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Tweet />

                    </Grid>
                    <Grid item md={6}>
                        <Newsletter />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Tweets