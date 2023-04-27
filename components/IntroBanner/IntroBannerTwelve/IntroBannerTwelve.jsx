import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./introBannerTwelve.module.scss"


const IntroBannerTwelve = () => {

    return (
        <section className={cls.intro}>
            <Container maxWidth="xl" className={cls.container}>
                <Grid container justifyContent="center" className={cls.introContent}>

                    <h1>
                        Project Management Certification Training
                    </h1>

                    <p>
                        Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna etquisque euismod orci ut et lobortis.
                    </p>

                    <Link href="#" className={cls.btn}>GET STARTED TODAY</Link>
                </Grid>
            </Container>
        </section>
    )
}

export default IntroBannerTwelve;