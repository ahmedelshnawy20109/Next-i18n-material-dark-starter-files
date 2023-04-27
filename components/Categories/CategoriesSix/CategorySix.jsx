import { Grid } from "@mui/material";
import Link from "next/link.js";
import React from "react";

import cls from './categorySix.module.scss';

const CategorySix = (props) => {
    return (
        <>
            <Link href="#">
                <div className={`${cls.category} ${"bgColored"}`}>
                    <Grid container alignItems="center" className={cls.container}>
                        <Grid item xs={12} className={cls.iconContainer}>
                            <div className={cls.icon}>
                                <i className="fas fa-bezier-curve"></i>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={cls.cardFooter}>
                                <h5 className="mb-0 line-clamp-1">Design</h5>
                                <p className="mb-0 line-clamp-1">Over 960 Courses</p>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </Link>
            <style jsx>{`
        .bgColored {
            background-image: url(${props.bgImg});
        }

      `}</style>
        </>
    )
}

export default CategorySix;