import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import EventFour from "./EventFour";

import cls from "./eventsFour.module.scss"

const EventsFour = () => {
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
                    <Grid item md={6} xs={12}>
                        <EventFour />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <EventFour />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <EventFour />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <EventFour />
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs="auto">
                        <div className={cls.btnContainer}>
                            <Link href="#">VIEW ALL</Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default EventsFour;