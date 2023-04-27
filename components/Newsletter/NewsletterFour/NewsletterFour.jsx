import { Container, Grid } from "@mui/material";
import React from "react";
import InfoBox from "./InfoBox";

import cls from "./newsletterFour.module.scss"

const NewsletterFour = () => {
    return (
        <>
            <section className={cls.banner}>
                <div className={cls.parallaxCursor}>
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
            <InfoBox />
        </>
    )
}
export default NewsletterFour