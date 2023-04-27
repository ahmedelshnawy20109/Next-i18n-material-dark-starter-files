import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./bannerTwo.module.scss"

const BannerTwo = () => {
    return (
        <section className={cls.banner}>
            <div className={cls.content}>
                <h1>Limitless learning, more possibilities</h1>
                <div className={cls.description}>Answer a few questions for your top picks</div>
                <div className={cls.btnContainer}>
                    <Link href="#">GET STARTED NOW</Link>
                </div>
            </div>
        </section>
    )
}
export default BannerTwo