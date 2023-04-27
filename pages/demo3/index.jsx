// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../../store/store";

import React from "react";
import { CountUpOne, CoursesThree, IntroBannerThree, NewsletterOne, NewsTwo, TeacherOneCarousel, VideoOne, WhyOne } from "../../components";
import HeaderThree from "../../components/Header/HeaderThree/HeaderThree";
import FooterTwo from "../../components/Footer/FooterTwo/FooterTwo";
const Demo3 = () => {
    return (
        <>
            <HeaderThree />
            <IntroBannerThree />
            <WhyOne />
            <CoursesThree />
            <Video />
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

export default Demo3;