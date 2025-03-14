// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../../store/store";

import React from "react";
import { BannerTwo, CourseFourCarousel, CoursesThree, IntroBannerThree, MobileAppsOne, PricesOne, TestimonialsTwoCarousel, WhyOne } from "../../components";
import HeaderThree from "../../components/Header/HeaderThree/HeaderThree";
import FooterThree from "../../components/Footer/FooterThree/FooterThree";
const Demo3 = () => {
    return (
        <>
            <HeaderThree />
            <IntroBannerThree />
            <WhyOne />
            <CoursesThree />
            <BannerTwo />
            <TestimonialsTwoCarousel />
            <CourseFourCarousel />
            <PricesOne />
            <MobileAppsOne />
            <FooterThree />
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

export default Demo3;