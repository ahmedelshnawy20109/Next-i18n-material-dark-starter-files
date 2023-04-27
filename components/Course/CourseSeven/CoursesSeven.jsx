import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CourseSeven from "./CourseSeven";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import cls from "./coursesSeven.module.scss"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid container alignItems="center" justifyContent="flex-start" spacing={3}>{children}</Grid>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CoursesSeven = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const pagination = {
        clickable: true,

    };
    const navigation = {
    };

    return (
        <section className={cls.courses} >
            <Container maxWidth="xl">
                <Grid container >
                    <Grid item lg>
                        <div className={cls.header}>
                            <h1>Featured Courses</h1>
                            <p>Discover your perfect program in our courses.</p>
                        </div>
                    </Grid>
                    <Grid item lg="auto">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                        >
                            <Tab {...a11yProps(0)} label="All Categories" />
                            <Tab {...a11yProps(1)} label="Art" />
                            <Tab {...a11yProps(2)} label="Exercise" />
                            <Tab {...a11yProps(3)} label="Music" />
                            <Tab {...a11yProps(4)} label="Software Development" />
                        </Tabs>
                    </Grid>

                </Grid>
                <TabPanel value={value} index={0}>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={20}
                        pagination={pagination}
                        navigation={navigation}
                        modules={[Pagination, Navigation]}
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
                            <CourseSeven />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseSeven />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseSeven />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseSeven />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CourseSeven />
                        </SwiperSlide>
                    </Swiper>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                    <Grid item md={3}>
                        <CourseSeven />
                    </Grid>
                </TabPanel>
            </Container>
        </section>
    )
}

export default CoursesSeven;