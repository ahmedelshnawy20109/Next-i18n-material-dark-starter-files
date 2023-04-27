import { Grid, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./testimonialsSix.module.scss"

const TestimonialsSix = () => {
    return (
        <div className={cls.card}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs="auto">
                    <div className={cls.avatar}>
                        <img src="./imgs/avatar/avatar-1.jpg" alt="..." />
                    </div>
                </Grid>
                <Grid item xs>
                    <div className={cls.mediaBody}>
                        <h5 class="mb-0">Albert Cole</h5>
                        <span>Designer</span>
                    </div>
                </Grid>
            </Grid>
            <div className={cls.cardFooter}>
                <p>“I am using their themes to update our aging website. I love the ease of use and custom ability of this theme. Plus whenever I have had an issue, the support has been top-notch."</p>
            </div>
        </div>
    )
}

export default TestimonialsSix;