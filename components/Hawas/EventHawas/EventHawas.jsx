import { Container, Grid } from "@mui/material";
import { i18n } from "next-i18next";
import React from "react";

import cls from "./eventHawas.module.scss"

const EventHawas = () => {
    return (
        <section className={`${cls.why} ${cls[i18n.language]}`}>
            <Container maxWidth="xl">
                <Grid container spacing={4} alignItems="center">
                    <Grid item lg={6} xs={12}>
                        <img src="./imgs/covers/cover-1.png" alt="..." />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <h1 class="font-lora fw-bold text-black mb-4">أسبوع الحذر على الطرق في البلاد</h1>

                        <p class="mb-5 line-height-lg">
                            ابداع منقطع النظير لطاقنا بمؤسسة حواس ضمن فعاليات اسبوع الحذر تجوالا بشتى المدن والقرى العربية، من مؤسسة لاخرى توعية وتذويت، فن وغناء ومسرح وافلام، جميعها لرفع منسوب الوعي المروري ومنع حوادث الطرق بمجتمعنا العربي. كل الشكر والتقدير لطاقم مؤسسة حواس وجميع القائمين على انجاح مثل هذه الفعاليات بدون استثناء.
                        </p>

                        <a href="./course-list-v1.html" class="btn btn-shark btn-wide lift">المزيد <i class="fa-solid fa-arrow-right-long"></i></a>
                    </Grid>
                </Grid>
            </Container>

        </section>
    )
}

export default EventHawas;