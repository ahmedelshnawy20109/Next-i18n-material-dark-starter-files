import { Container, Grid } from "@mui/material";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import LangSwitch from "../../switches/LangSwitch/LangSwitch";

import cls from "./footerFour.module.scss"

const FooterFour = () => {
    const { t, i18n } = useTranslation("common");

    return (
        <footer className={`${cls.footer} ${cls[i18n.language]}`}>
            <Container maxWidth="xl" >
                <Grid container>
                    <Grid item xs={12}>
                        <h1>Stay Connected</h1>
                        <a href="tel:1234567890" className={cls.phone}>123 456 7890</a>
                        <a href="mailto:support@skola.com" className={cls.mail}>support@skola.com</a>
                        <p class="text-gray-800 mb-4 font-size-sm-alone">
                            329 Queensberry Street, North Melbourne VIC 3051, Australia.
                        </p>
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
                </Grid>
            </Container>
        </footer>
    )
}

export default FooterFour