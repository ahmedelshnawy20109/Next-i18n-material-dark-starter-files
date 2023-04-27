import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Container from "@mui/material/Container";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import CourseOne from "./CourseOne";

import 'swiper/css';
import "swiper/css/pagination";
import cls from "./courseOneCarousel.module.scss"


const CourseOneCarousel = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const pagination = {
        clickable: true,

    };
    return (
        <section className={cls.courses}>
            <Container maxWidth="xl" className={cls.container}>
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
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={20}
                    pagination={pagination}
                    modules={[Pagination]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide>
                        <CourseOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CourseOne />
                    </SwiperSlide>
                </Swiper>
            </Container>

        </section>
    )
}

export default CourseOneCarousel;