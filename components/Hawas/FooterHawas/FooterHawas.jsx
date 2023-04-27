import { Container, Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";

import cls from "./footerHawas.module.scss"

const FooterHawas = () => {
    const { t, i18n } = useTranslation("common");

    return (
        <footer className={`${cls.footer} ${cls[i18n.language]}`}>
            <Container maxWidth="xl" >
                <Grid container>
                    <Grid item lg={4} md={4} xs={12}>
                        <img src="./imgs/hawas/hawaafinal.png" alt="..." />

                        <p>
                            329 Queensberry Street, North Melbourne VIC 3051, Australia.
                        </p>

                        <a href="tel:1234567890">123 456 7890</a>

                        <a href="mailto:support@skola.com">support@skola.com</a>

                        <ul className={cls.socials}>
                            <li class="list-inline-item list-social-item">
                                <a href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="list-inline-item list-social-item">
                                <a href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item list-social-item">
                                <a href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="list-inline-item list-social-item">
                                <a href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2} md={4} xs={12} className={cls.widgit}>
                        <h5>
                            Our Company
                        </h5>

                        <ul>
                            <li class="mb-3">
                                <a href="./about-v1.html" class="text-reset">
                                    Our Company
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./about-v2.html" class="text-reset">
                                    About Us
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./contact-us.html" class="text-reset">
                                    Contact Us
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./contact-us.html" class="text-reset">
                                    Community
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v1.html" class="text-reset">
                                    Student Perks
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./blog-grid-v1.html" class="text-reset">
                                    Blog
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./pricing.html" class="text-reset">
                                    Affiliate Program
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./contact-us.html" class="text-reset">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2} md={4} xs={12} className={cls.widgit}>
                        <h5>
                            Topics
                        </h5>
                        <ul>
                            <li class="mb-3">
                                <a href="./course-list-v2.html" class="text-reset">
                                    HTML
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v2.html" class="text-reset">
                                    CSS
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v6.html" class="text-reset">
                                    Design
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v5.html" class="text-reset">
                                    JavaScript
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v4.html" class="text-reset">
                                    Ruby
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v1.html" class="text-reset">
                                    PHP
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v3.html" class="text-reset">
                                    Android
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v4.html" class="text-reset">
                                    Development Tools
                                </a>
                            </li>
                            <li class="mb-3">
                                <a href="./course-list-v6.html" class="text-reset">
                                    Business
                                </a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={4} md={8} xs={12} className={cls.widgit}>
                        <h5>
                            Subscribe our newsletter
                        </h5>

                        <p>Your download should start automatically, if not  Click here. Should I give up, huh?.</p>
                        <form>
                            <div className={cls.inputGroup}>
                                <input type="text" placeholder="Enter your email" />
                                <button className={cls.inputGroupAppend} type="button">Subscribe</button>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={cls.footerBottom}>
                            <Grid container justifyContent="center">
                                <Grid item lg="auto" xs={12}>
                                    <p>Copyright © 2023 GridsApps. All Right Reserved.</p>
                                </Grid>
                                <Grid item lg md="auto" xs={12}>
                                    <div  className={cls.links}>

                                        <ul>
                                            <li>
                                                <Link href="#">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Site Map</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Privacy policy</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Web Use Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="#">Cookie Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item lg="auto" md="auto" xs="auto">
                                    <LangSwitch />
                                </Grid>

                            </Grid>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default FooterHawas