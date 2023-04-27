import { Container, Grid } from "@mui/material";
import React from "react";

import cls from "./whyNine.module.scss"

const WhyNine = () => {
    return (
        <section className={cls.why}>
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center">
                    <Grid item lg={6} xs={12}>
                        <img src="./imgs/covers/cover-1.png" alt="..." />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                            <h1 class="font-lora fw-bold text-black mb-4">Welcome to Skola</h1>

                            <p class="mb-5 line-height-lg">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                            <ul class="mb-6 ps-4">
                                <li class="mb-5">Creative Study Pattern</li>
                                <li class="mb-5">Quick Crash Courses</li>
                                <li class="mb-5">Certification Awarded</li>
                                <li class="mb-5">Provided with Experimental Examples</li>
                            </ul>

                            <a href="./course-list-v1.html" class="btn btn-shark btn-wide lift">NEW COURSES</a>
                    </Grid>
                </Grid>
            </Container>
            
        </section>
    )
}

export default WhyNine;