import { Grid } from "@mui/material";
import Link from "next/link.js";
import React from "react";

import cls from './categoryThree.module.scss';

const CategoryThree = () => {
    return (
        <Link href="#" className={cls.category}>
            <Grid container spacing={2}>
                <Grid item xs="auto">
                    <div className={cls.iconContainer}>
                        <div className={cls.icon}>
                            <i className="fas fa-bezier-curve"></i>
                        </div>
                    </div>
                </Grid>
                <Grid item xs>
                    <div className={cls.cardFooter}>
                        <h5 className="mb-0 line-clamp-1">Design</h5>
                        <p className="mb-0 line-clamp-1">Over 960 Courses</p>
                    </div>
                </Grid>
            </Grid>

        </Link>
    )
}

export default CategoryThree;