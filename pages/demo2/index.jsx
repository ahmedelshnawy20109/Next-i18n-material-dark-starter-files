// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../../store/store";

import React from "react";
import { CategoriesTwo, CountUpOne, CoursesTwo, IntroBannerTwo, NewsletterOne, NewsTwo, TeacherOneCarousel, VideoOne } from "../../components";
import HeaderTwo from "../../components/Header/HeaderTwo/HeaderTwo";
import FooterTwo from "../../components/Footer/FooterTwo/FooterTwo";
const Demo2 = () => {
    return (
        <>
            <HeaderTwo />
            <IntroBannerTwo />
            <CategoriesTwo />
            <CoursesTwo />
            <VideoOne />
            <CountUpOne />
            <TeacherOneCarousel />
            <NewsTwo />
            <NewsletterOne />
            <FooterTwo />
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

export default Demo2;