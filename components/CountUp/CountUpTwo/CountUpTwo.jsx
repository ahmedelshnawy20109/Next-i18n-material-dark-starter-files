import { Container, Grid } from "@mui/material";
import React from "react";
import CountUp from 'react-countup';

import cls from "./countUpTwo.module.scss"

const CountUpTwo = () => {
    return (
        <section className={cls.countUp}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item md={7} xs={12} className={cls.count}>
                        <h2>REGISTER NOW AND GET A 50% DISCOUNT</h2>
                        <p>Get 100 Online Courses for Free</p>
                        <Grid container spacing={4}>
                            <Grid item md="auto">
                                <CountUp
                                    end={40}
                                    duration={5}
                                    enableScrollSpy={true} />
                                <p className={cls.countLabel}>DAYS</p>
                            </Grid>
                            <Grid item md="auto">
                                <CountUp
                                    end={59}
                                    duration={5}
                                    enableScrollSpy={true} />
                                <p className={cls.countLabel}>HOURS</p>
                            </Grid>
                            <Grid item md="auto">
                                <CountUp
                                    end={27}
                                    duration={5}
                                    enableScrollSpy={true} />
                                <p className={cls.countLabel}>MINUTES</p>
                            </Grid>
                            <Grid item md="auto">
                                <CountUp
                                    end={10}
                                    duration={5}
                                    enableScrollSpy={true} />
                                <p className={cls.countLabel}>SECONDS</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12} className={cls.formSection}>
                        <div className={cls.formHeader}>
                            <p>Create free account to get</p>
                            <h3>The Complete Web Developer Course</h3>
                        </div>

                        <form>
                            <div className={cls.formGroup}>
                                <input type="text" class="form-control form-control-sm placeholder-1" id="cardName" placeholder="Your Name" />
                                <label class="sr-only" for="cardName">Name</label>
                            </div>
                            <div className={cls.formGroup}>
                                <input type="email" class="form-control form-control-sm placeholder-1" id="cardEmail" placeholder="Email" />
                                <label class="sr-only" for="cardEmail">Email</label>
                            </div>
                            <div className={cls.formGroup}>
                                <input type="number" class="form-control form-control-sm placeholder-1" id="cardPhone" placeholder="Phone" />
                                <label class="sr-only" for="cardPhone">Password</label>
                            </div>
                            <div class="mt-6">
                                <button className={cls.btn} type="submit">
                                    GET IT NOW
                                </button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default CountUpTwo