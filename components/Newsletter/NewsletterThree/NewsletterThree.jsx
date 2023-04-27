import { Container, Grid } from "@mui/material";
import React from "react";

import cls from "./newsletterThree.module.scss"

const NewsletterThree = () => {
    return (
        <section className={cls.newsletter}>
            <Container maxWidth="xl">
                <Grid container spacing={2} alignItems="center">
                    <Grid item lg={6} xs={12}>
                        <h1>Subscribe our newsletter</h1>
                        <p>Your download should start automatically, if not  Click here. Should I give up, huh?.</p>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <form>
                            <div className={cls.inputGroup}>
                                <div className={cls.inputGroupAppend}>
                                    <Grid container alignItems="center">
                                        <Grid item xs>
                                            <input type="text" placeholder="Enter your email" />
                                        </Grid>
                                        <Grid item xs="auto">
                                            <button type="button">Subscribe</button>

                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default NewsletterThree