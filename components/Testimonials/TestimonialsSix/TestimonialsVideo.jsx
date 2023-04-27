import { Container, Grid } from "@mui/material";
import React from "react";
import TestimonialsSixCarousel from "./TestimonialsSixCarousel";

import cls from "./testimonialsVideo.module.scss"
import VideoSix from "./VideoSix";

const TestimonialsVideo = () => {
    return (
        <section className={cls.testimonialsVideo}>
            <Container maxWidth="xl" className={cls.container}>
                <Grid container>
                    <Grid lg={6} order={{md: 2, xs: 12}}>
                        <VideoSix />
                    </Grid>
                    <Grid lg={6} order={{md: 1, xs: 12}}>
                        <TestimonialsSixCarousel />
                    </Grid>
                </Grid>
            </Container>
            <div className={cls.bgOver}>

            </div>
        </section>
    )
}

export default TestimonialsVideo;