import { Container, Grid } from "@mui/material";
import React from "react";
import JobCard from "./JobCard";
import cls from "./jobsOne.module.scss"

const JobsOne = () => {
    return (
        <section className={cls.jobs}>
            <Container maxWidth="xl">
                <div className={cls.header}>
                    <h1 className="mb-1">Job Posting / Careers</h1>
                    <p className="font-size-lg mb-0 text-capitalize">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <Grid container spacing={2}>
                    <Grid item md xs={12}>
                        <JobCard />
                    </Grid>
                    <Grid item md xs={12}>
                        <JobCard />
                    </Grid>
                    <Grid item md xs={12}>
                        <JobCard />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default JobsOne