import { Grid, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./testimonialsTwo.module.scss"

const TestimonialsTwo = () => {
    return (
        <div className={cls.card}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} className={cls.avatar}>
                    <img src="./imgs/avatar/avatar-1.jpg" />
                </Grid>
                <Grid item xs={12} className={cls.name}>
                    <h5 class="mb-0">Albert Cole</h5>
                    <p>Designer</p>
                </Grid>
            </Grid>

            <div className={cls.cardFooter}>
                <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
            </div>
        </div>
    )
}

export default TestimonialsTwo;