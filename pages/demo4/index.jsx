// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "../../store/store";

import React from "react";
import { BannerThree, CategoriesThree, CoursesFive, EventsTwo, InstructorsTwoCarousel, IntroBannerFour, NewsOne, PartnersOne } from "../../components";
import HeaderTwo from "../../components/Header/HeaderTwo/HeaderTwo";
import FooterFour from "../../components/Footer/FooterFour/FooterFour";
const Demo4 = () => {
    return (
        <>
            <HeaderTwo btnBg="#cf574b" btnColor="#fff" btnRadius="800px"/>
            <IntroBannerFour />
            <PartnersOne borderBottom="1px solid #e7e7ec" padding="24px 0" bg="#fff"/>
            <CategoriesThree/>
            <CoursesFive />
            <EventsTwo />
            <NewsOne borderBottom="1px solid #e7e7ec"/>
            <InstructorsTwoCarousel />
            <BannerThree />
            <FooterFour />
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

export default Demo4;