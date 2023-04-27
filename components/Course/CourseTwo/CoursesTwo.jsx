import React from "react";

import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";

import cls from "./coursesTwo.module.scss"
import CourseTwo from "./CourseTwo";


const CoursesTwo = () => {

    return (
        <section className={cls.courses}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center" >
                    <Grid item md xs={12}>
                        <h1 className="mb-1">Featured Courses</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <CourseTwo />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTwo />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTwo />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTwo />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTwo />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTwo />
                    </Grid>
                </Grid>
                <Link href="#" className={cls.all}>
                    Browse All
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.7779 4.6098L3.32777 0.159755C3.22485 0.0567475 3.08745 0 2.94095 0C2.79445 0 2.65705 0.0567475 2.55412 0.159755L2.2264 0.487394C2.01315 0.700889 2.01315 1.04788 2.2264 1.26105L5.96328 4.99793L2.22225 8.73895C2.11933 8.84196 2.0625 8.97928 2.0625 9.1257C2.0625 9.27228 2.11933 9.4096 2.22225 9.51269L2.54998 9.84025C2.65298 9.94325 2.7903 10 2.9368 10C3.0833 10 3.2207 9.94325 3.32363 9.84025L7.7779 5.38614C7.88107 5.2828 7.93774 5.14484 7.93741 4.99817C7.93774 4.85094 7.88107 4.71305 7.7779 4.6098Z" fill="currentColor"></path>
                    </svg>
                </Link>
            </Container>

        </section>
    )
}

export default CoursesTwo;