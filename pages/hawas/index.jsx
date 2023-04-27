// REDIRECTION FILES
import langRedirection from "../../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../../utils/redirections/routeRedirection/routeRedirection";
// INTERNATIONALIZATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// REDUX STUFF
import { wrapper } from "./../../store/store";

import CountUpHawas from "../../components/Hawas/CountUpHawas/CountUpHawas";
import CourseHawasCarousel from "../../components/Hawas/CourseHawas/CourseHawasCarousel";
import EventHawas from "../../components/Hawas/EventHawas/EventHawas";
import EventsHawas from "../../components/Hawas/EventsHawas/EventsHawas";
import FooterHawas from "../../components/Hawas/FooterHawas/FooterHawas";
import GalleryHawas from "../../components/Hawas/GalleryHawas/GalleryHawas";
import HeaderHawas from "../../components/Hawas/HeaderHawas/HeaderHawas";
import IntroBannerHawas from "../../components/Hawas/IntroBannerHawas/IntroBannerHawas";
import NewsHawas from "../../components/Hawas/NewsHawas/NewsHawas";
import VideoHawas from "../../components/Hawas/VideoHawas/VideoHawas";
import WhyHawas from "../../components/Hawas/WhyHawas/WhyHawas";

const Hawas = () => {
    return (
        <>
            <HeaderHawas />
            <IntroBannerHawas />
            <WhyHawas />
            <EventHawas />
            <VideoHawas />
            <CourseHawasCarousel />
            <EventsHawas />
            <CountUpHawas />
            <NewsHawas />
            <GalleryHawas />
            <FooterHawas />
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

export default Hawas