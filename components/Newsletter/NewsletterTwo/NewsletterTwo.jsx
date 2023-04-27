import { Container, Grid } from "@mui/material";
import React from "react";

import cls from "./newsletterTwo.module.scss"

const NewsletterTwo = () => {
    return (
        <section className={cls.newsletter}>
            <Container maxWidth="xl">
                <Grid container className={cls.content} spacing={3} alignItems="center">
                    <Grid item lg={7} xs={12}>
                        <h1>Subscribe our newsletter</h1>
                        <p>Your download should start automatically, if not  Click here. Should I give up, huh?.</p>
                    </Grid>
                    <Grid item lg={5} xs={12}>
                        <form>
                            <div className={cls.inputGroup}>
                                <div className={cls.inputGroupAppend}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <input type="text" placeholder="Enter your email" />
                                        </Grid>
                                        <Grid item xs={12}>
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

export default NewsletterTwo