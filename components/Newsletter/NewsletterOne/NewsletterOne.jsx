import { Container, Grid } from "@mui/material";
import React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import cls from "./newsletterOne.module.scss"

const NewsletterOne = () => {
    return (
        <MouseParallaxContainer>
            <section className={cls.banner}>
                <div className={cls.parallaxCursor}>
                    <MouseParallaxChild factorX={0.10} factorY={0.16} >
                        <img className="img-fluid" src="./imgs/parallax/illustration-1.jpg" alt="Layer" />
                    </MouseParallaxChild>
                </div>

                <Container maxWidth="xl" className={cls.content}>
                    <Grid container justifyContent="center">
                        <Grid item lg={7}>
                            <h1>Subscribe our newsletter</h1>
                            <div className={cls.description}>Your download should start automatically, if not Click here. Should I give up, huh?.</div>
                            <form>
                                <div className={cls.inputGroup}>
                                    <input type="text" placeholder="Enter your email" />
                                    <div className={cls.inputGroupAppend}>
                                        <button>Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </MouseParallaxContainer>
    )
}
export default NewsletterOne