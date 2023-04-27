import { Container, Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";

import cls from "./footerTwo.module.scss"

const FooterTwo = (props) => {
    const { t, i18n } = useTranslation("common");

    return (
        <footer className={`${cls.footer} ${cls[i18n.language]}`} >
            <Container maxWidth="xl" className={cls.container}>
                <Grid container>
                    <Grid item lg={4} md={4} xs={12}>
                        <div className={cls.brand}>

                        <img src="./imgs/brand.svg" alt="..." />
                        </div>

                        <p>
                            329 Queensberry Street, North Melbourne VIC 3051, Australia.
                        </p>

                        <Link href="tel:1234567890">123 456 7890</Link>

                        <Link href="mailto:support@skola.com">support@skola.com</Link>

                        <ul className={cls.socials}>
                            <li class="list-inline-item list-social-item">
                                <Link href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-facebook-f"></i>
                                </Link>
                            </li>
                            <li class="list-inline-item list-social-item">
                                <Link href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-twitter"></i>
                                </Link>
                            </li>
                            <li class="list-inline-item list-social-item">
                                <Link href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-instagram"></i>
                                </Link>
                            </li>
                            <li class="list-inline-item list-social-item">
                                <Link href="#" class="w-36 h-36 bg-white-hover shadow-dark-hover rounded-circle d-flex align-items-center justify-content-center">
                                    <i class="fab fa-linkedin-in"></i>
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2} md={4} xs={12} className={cls.widgit}>
                        <h5>
                            Our Company
                        </h5>

                        <ul>
                            <li class="mb-3">
                                <Link href="./about-v1.html">
                                    Our Company
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./about-v2.html">
                                    About Us
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./contact-us.html">
                                    Contact Us
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./contact-us.html">
                                    Community
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v1.html">
                                    Student Perks
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./blog-grid-v1.html">
                                    Blog
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./pricing.html">
                                    Affiliate Program
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./contact-us.html">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2} md={4} xs={12} className={cls.widgit}>
                        <h5>
                            Topics
                        </h5>
                        <ul>
                            <li class="mb-3">
                                <Link href="./course-list-v2.html">
                                    HTML
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v2.html">
                                    CSS
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v6.html">
                                    Design
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v5.html">
                                    JavaScript
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v4.html">
                                    Ruby
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v1.html">
                                    PHP
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v3.html">
                                    Android
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v4.html">
                                    Development Tools
                                </Link>
                            </li>
                            <li class="mb-3">
                                <Link href="./course-list-v6.html">
                                    Business
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2} md={4} xs={12} className={cls.widgit}>
                        <h5>Tracks

                        </h5>
                        <ul>
                            <li>
                                <Link href="./lesson-single-v1.html">
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link href="./lesson-single-v2.html">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="./lesson-single-v1.html">
                                    Rails Development
                                </Link>
                            </li>
                            <li>
                                <Link href="./lesson-single-v2.html">
                                    PHP Development
                                </Link>
                            </li>
                            <li>
                                <Link href="./lesson-single-v1.html">
                                    Android Development
                                </Link>
                            </li>
                            <li>
                                <Link href="./lesson-single-v2.html">
                                    Starting a Business
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={2} md={4} xs={12} className={cls.widgit}>
                        <h5 class="mb-5">
                            Support
                        </h5>

                        <ul>
                            <li>
                                <Link href="./docs/index.html">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="./docs/index.html">
                                    Forums
                                </Link>
                            </li>
                            <li>
                                <Link href="./docs/index.html">
                                    Language Packs
                                </Link>
                            </li>
                            <li>
                                <Link href="./docs/changelog.html">
                                    Release Status
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={cls.footerBottom}>
                            <Grid container justifyContent="center">
                                <Grid item lg="auto" xs={12}>
                                    <p>Copyright © 2023 GridsApps. All Right Reserved.</p>
                                </Grid>
                                <Grid item lg md="auto" xs={12}>
                                    <div className={cls.links}>

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
            </Container >
        </footer >
    )
}

export default FooterTwo