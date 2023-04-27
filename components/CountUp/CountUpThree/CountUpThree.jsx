import { Container, Grid } from "@mui/material";
import React from "react";
import CountUp from 'react-countup';

import cls from "./countUpThree.module.scss"
const CountUpThree = () => {
    return (
        <section className={cls.CountUp}>
            <Container maxWidth="xl">
                <h2>SCHOOL ACHIEVEMENTS</h2>
                <p>Discover your perfect program in our courses.</p>
                <Grid container >
                    <Grid item md={3} className={cls.item}>
                        <CountUp
                            end={749}
                            duration={5}
                            enableScrollSpy={true} />
                        <p>Creative Events</p>
                    </Grid>
                    <Grid item md={3} className={cls.item}>
                        <CountUp
                            end={853}
                            duration={5}
                            enableScrollSpy={true} />
                        <p>Skilled Tutors</p>
                    </Grid>
                    <Grid item md={3} className={cls.item}>
                        <CountUp
                            end={28}
                            duration={5}
                            enableScrollSpy={true}
                            suffix=" k+" />
                        <p>Online Courses</p>
                    </Grid>
                    <Grid item md={3} className={cls.item}>
                        <CountUp
                            end={53}
                            duration={5}
                            enableScrollSpy={true}
                            suffix=" k+" />
                        <p>People Worldwide</p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
export default CountUpThree