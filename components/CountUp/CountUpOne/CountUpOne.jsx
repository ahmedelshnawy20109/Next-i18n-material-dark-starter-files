import { Container, Grid } from "@mui/material";
import React from "react";
import CountUp from 'react-countup';

import cls from "./countUp.module.scss"

const CountUpOne = () => {
    return (
        <div className={cls.countUp}>
            <Container maxWidth="xl">
                <Grid container >
                    <Grid item md={3}>
                        <CountUp 
                        end={749}
                        duration={5}
                        enableScrollSpy={true} />
                        <p className="font-size-lg fw-medium mb-0">Creative Events</p>
                    </Grid>
                    <Grid item md={3}>
                        <CountUp 
                        end={853}
                        duration={5}
                        enableScrollSpy={true} />
                        <p className="font-size-lg fw-medium mb-0">Skilled Tutors</p>
                    </Grid>
                    <Grid item md={3}>
                        <CountUp 
                        end={28}
                        duration={5}
                        enableScrollSpy={true}
                        suffix= " k+" />
                        <p className="font-size-lg fw-medium mb-0">Online Courses</p>
                    </Grid>
                    <Grid item md={3}>
                        <CountUp 
                        end={53}
                        duration={5}
                        enableScrollSpy={true}
                        suffix= " k+" />
                        <p className="font-size-lg fw-medium mb-0">People Worldwide</p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default CountUpOne