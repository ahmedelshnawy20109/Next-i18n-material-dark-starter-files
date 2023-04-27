
import React from "react";

import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";

import cls from "./coursesSix.module.scss"
import CourseSix from "./CourseSix";


const CoursesSix = () => {

    return (
        <section className={cls.courses}>
            <Container maxWidth="xl" className={cls.container}>
                <Grid container className={cls.header} alignItems="center" >
                    <Grid item md xs={12}>
                        <h1 className="mb-1">Featured Courses</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <CourseSix />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CourseSix />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CourseSix />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CourseSix />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CourseSix />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CourseSix />
                    </Grid>
                </Grid>
                <Link href="#" className={cls.all}>
                    VIEW ALL COURSES
                </Link>
            </Container>

        </section>
    )
}

export default CoursesSix;