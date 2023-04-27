// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "./../../store/store";

import React from "react";
import HeaderOne from "../../components/Header/HeaderOne/HeaderOne"
import { BannerOne, CategoriesOne, CourseOneCarousel, EventsOne, InstructorsOneCarousel, IntroBannerOne, NewsOne, PartnersOne, TestimonialsOneCarousel } from "../../components";
import FooterOne from "../../components/Footer/FooterOne/FooterOne";
const Demo1 = () => {
    return (
        <>
            <HeaderOne />
            <IntroBannerOne />
            <CourseOneCarousel />
            <CategoriesOne />
            <TestimonialsOneCarousel />
            <PartnersOne />
            <EventsOne />
            <InstructorsOneCarousel />
            <NewsOne />
            <BannerOne />
            <FooterOne />
        </>
    )
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, locale, resolvedUrl }) => {
            const languageRedirection = langRedirection(req, locale);
            if (languageRedirection) return languageRedirection;

            const routerRedirection = routeRedirection(req, resolvedUrl);
            if (routerRedirection) return routerRedirection;

            return {
                props: {
                    ...(await serverSideTranslations(locale, ["common"])),
                },
            };
        }
);

export default Demo1;