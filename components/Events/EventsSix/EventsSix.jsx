import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import EventSix from "./EventSix";

import cls from "./eventsSix.module.scss"

const EventsSix = () => {
    return (
        <section className={cls.events}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center">
                    <Grid item md >
                        <h1>Upcoming Events</h1>
                        <p>Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <EventSix />
                    </Grid>
                    <Grid item xs={12}>
                        <EventSix />
                    </Grid>
                    <Grid item xs={12}>
                        <EventSix />
                    </Grid>
                    <Grid item xs={12}>
                        <EventSix />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default EventsSix;