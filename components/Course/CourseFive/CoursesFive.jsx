import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CourseFive from "./CourseFive";

import cls from "./CoursesFive.module.scss"

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

const CoursesFive = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className={cls.courses} >
            <Container maxWidth="xl">
                <div className={cls.header}>
                    <h1>Featured Courses</h1>
                    <p>Discover your perfect program in our courses.</p>
                </div>
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
                <TabPanel value={value} index={0}>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                    <Grid item md={3}>
                        <CourseFive />
                    </Grid>
                </TabPanel>
            </Container>
        </section>
    )
}

export default CoursesFive;