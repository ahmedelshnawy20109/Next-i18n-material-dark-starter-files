import { Grid, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./testimonialsOne.module.scss"

const TestimonialsOne = () => {
    return (
        <div className={cls.card}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs="auto" className={cls.avatar}>
                    <img src="./imgs/avatar/avatar-1.jpg" />
                </Grid>
                <Grid item xs className={cls.name}>
                    <h5 class="mb-0">Albert Cole</h5>
                    <span>Designer</span>
                </Grid>
            </Grid>

            <div className={cls.cardFooter}>
                <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
            </div>
        </div>
    )
}

export default TestimonialsOne;