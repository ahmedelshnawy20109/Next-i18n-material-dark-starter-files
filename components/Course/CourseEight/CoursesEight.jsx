import React from "react";
import Container from "@mui/material/Container";
import CourseEight from "./CourseEight";


import cls from "./coursesEight.module.scss"
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";


const CoursesEight = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <section className={cls.courses}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center" >
                    <Grid item md xs={12}>
                        <h1 className="mb-1">Featured Courses</h1>
                        <p className="font-size-lg text-capitalize">Discover your perfect program in our courses.</p>

                    </Grid>
                    <Grid item md="auto" xs={12}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} className={cls.select}>
                            <InputLabel id="demo-simple-select-helper-label">Subjects</InputLabel>
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
                <Grid container spacing={2}>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                    <Grid item lg={3} md={6} xs={12}>
                        <CourseEight />
                    </Grid>
                </Grid>
            </Container>

        </section>
    )
}

export default CoursesEight;