import React from "react";

import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Link from "next/link";

import cls from "./coursesTen.module.scss"
import CourseTen from "./CourseTen";


const CoursesTen = () => {

    return (
        <section className={cls.courses}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center" >
                    <Grid item md xs={12}>
                        <h1 className="mb-1">Latest Online Courses</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <CourseTen />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTen />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTen />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTen />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTen />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <CourseTen />
                    </Grid>
                </Grid>
            </Container>
            <Link href="#" className={cls.all}>
                VIEW ALL COURSES
            </Link>
            <div className={cls.shape}>
                <svg viewBox="0 0 1920 86" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                    <path fill="currentColor" d="M0,86h1920V72.6C1174-69.7,752,34.5,0,72.6L0,86z"></path>
                </svg>
            </div>
        </section>
    )
}

export default CoursesTen;