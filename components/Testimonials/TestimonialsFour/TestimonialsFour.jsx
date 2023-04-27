import { Grid, Rating } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./testimonialsFour.module.scss"

const TestimonialsFour = () => {
    return (
        <div className={cls.card}>
            <div className={cls.avatar}>
                <img src="./imgs/avatar/avatar-1.jpg" alt="..." />
            </div>
            <div className={cls.mediaBody}>
                <h5 class="mb-0">Albert Cole</h5>
                <span>Designer</span>
            </div>
            <div className={cls.cardFooter}>
                <p>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</p>
            </div>
        </div>
    )
}

export default TestimonialsFour;