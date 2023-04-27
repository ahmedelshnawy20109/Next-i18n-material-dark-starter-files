import React from "react";

import Container from "@mui/material/Container";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Link from "next/link";

import cls from "./coursesNine.module.scss"
import CourseTwo from "./CourseNine";


const CoursesNine = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <section className={cls.courses}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} justifyContent="center"  spacing={2}>
                    <Grid item xs={12}>
                        <h1 className="mb-1">My Courses</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>
                    </Grid>
                    <Grid item md="auto" xs={12} className={cls.menu}>
                        <p className={cls.label}> Filter By </p>
                        <FormControl sx={{ m: 1, minWidth: 120 }} className={cls.select}>
                            <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Subjects"
                                onChange={handleChange}
                            >
                                <MenuItem value={20}>All Subjects</MenuItem>
                                <MenuItem value={10}>Another option</MenuItem>
                                <MenuItem value={30}>Something else here</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} className={cls.select}>
                            <InputLabel id="demo-simple-select-helper-label">Progress</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Subjects"
                                onChange={handleChange}
                            >
                                <MenuItem value={20}>All Subjects</MenuItem>
                                <MenuItem value={10}>Another option</MenuItem>
                                <MenuItem value={30}>Something else here</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} className={cls.select}>
                            <InputLabel id="demo-simple-select-helper-label">Instructor</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Subjects"
                                onChange={handleChange}
                            >
                                <MenuItem value={20}>All Subjects</MenuItem>
                                <MenuItem value={10}>Another option</MenuItem>
                                <MenuItem value={30}>Something else here</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md="auto" xs={12} className={cls.menu}>
                        <p className={cls.label}> Sort By </p>
                        <FormControl sx={{ m: 1, minWidth: 120 }} className={cls.select}>
                            <InputLabel id="demo-simple-select-helper-label">Recently Accessed</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="Subjects"
                                onChange={handleChange}
                            >
                                <MenuItem value={20}>All Subjects</MenuItem>
                                <MenuItem value={10}>Another option</MenuItem>
                                <MenuItem value={30}>Something else here</MenuItem>
                            </Select>
                        </FormControl>
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
            </Container>

        </section>
    )
}

export default CoursesNine;