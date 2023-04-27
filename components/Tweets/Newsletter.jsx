import { Container, Grid } from "@mui/material";
import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./newsletter.module.scss"

const Newsletter = () => {
    return (
        <div className={cls.newsletter}>
            <h3>Subscribe our newsletter</h3>
            <div className={cls.description}>Your download should start automatically, if not Click here. Should I give up, huh?.</div>
            <form>
                <div className={cls.inputGroup}>
                    <input type="text" placeholder="Enter your email" />
                    <div className={cls.inputGroupAppend}>
                        <button>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>

    )
}
export default Newsletter