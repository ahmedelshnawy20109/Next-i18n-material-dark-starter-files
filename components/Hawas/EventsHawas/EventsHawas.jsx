import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import EventHawas from "./EventHawas";

import cls from "./eventsHawas.module.scss"

const EventsHawas = () => {
    return (
        <section className={cls.events}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center">
                    <Grid item xs >
                        <h1>مناسبات واحداث قادمة</h1>
                        <p>Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <EventHawas />
                    </Grid>
                    <Grid item xs={12}>
                        <EventHawas />
                    </Grid>
                    <Grid item xs={12}>
                        <EventHawas />
                    </Grid>
                    <Grid item xs={12}>
                        <EventHawas />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default EventsHawas;