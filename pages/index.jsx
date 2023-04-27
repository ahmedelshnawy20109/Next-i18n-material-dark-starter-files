import Link from "next/link";
// COMPONENTS
import LangSwitch from "./../components/switches/LangSwitch/LangSwitch";
import ModeSwitch from "../components/switches/ModeSwitch/ModeSwitch";
// REDIRECTION FILES
import langRedirection from "../utils/redirections/langRedirection/langRedirection";
import routeRedirection from "../utils/redirections/routeRedirection/routeRedirection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// INTERNATIONALIZATION
import { useTranslation } from "next-i18next";
// REDUX STUFF
import { wrapper } from "../store/store";
// MATERIAL STUFF
import Container from "@mui/material/Container";

import {
  IntroBannerOne,
  CourseOneCarousel,
  CategoriesOne,
  TestimonialsOneCarousel,
  PartnersOne,
  EventsOne,
  InstructorsOneCarousel,
  NewsOne,
  BannerOne,
  IntroBannerTwo,
  CategoriesTwo,
  CoursesTwo,
  VideoOne,
  CountUpOne,
  TeacherOneCarousel,
  NewsTwo,
  NewsletterOne,
  IntroBannerThree,
  WhyOne,
  CoursesThree,
  BannerTwo,
  TestimonialsTwoCarousel,
  CourseFourCarousel,
  PricesOne,
  MobileAppsOne,
  IntroBannerFour,
  CategoriesThree,
  CoursesFive,
  EventsTwo,
  InstructorsTwoCarousel,
  BannerThree,
  IntroBannerFive,
  CoursesSix,
  WhyTwo,
  FeaturesOne,
  NewsThree,
  InstructorsThreeCarousel,
  TestimonialsThree,
  Tweets,
  IntroBannerSix,
  CoursesSeven,
  CategoriesFour,
  EventsThree,
  WhyThree,
  NewsletterTwo,
  IntroBannerSeven,
  CoursesEight,
  WhyFour,
  VideoTwo,
  TestimonialsFourCarousel,
  CategoriesFive,
  JobsOne,
  BannerFour,
  IntroBannerEight,
  CategoriesSix,
  CoursesNine,
  BannerFive,
  TestimonialsFiveCarousel,
  EventsFour,
  CountUpTwo,
  NewsletterThree,
  IntroBannerNine,
  VideoThree,
  NewsletterFour,
  IntroBannerTen,
  TestimonialsVideo,
  InstructorsFourCarousel,
  FeaturesTwo,
  CountUpThree,
  EventsFive,
  BannerSix,
  IntroBannerEleven,
  WhyFive,
  EventsSix,
  IntroBannerTwelve,
  CountUpFour,
  CoursesTen,
  FeaturesThree,
  IntroBannerThirteen,
  VideoFour,
  IntroBannerFourteen,
  WhySix,
  WhySeven,
  GalleryOne,
  IntroBannerFifteen,
  WhyEight,
  WhyNine,
  CourseElevenCarousel,
  CountUpFive,
  GalleryTwo,
  BannerSeven
  
} from "../components"

import { Grid } from "@mui/material";

const Home = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <IntroBannerOne />
      <CourseOneCarousel />
      <CategoriesOne />
      <TestimonialsOneCarousel />
      <PartnersOne />
      <EventsOne />
      <InstructorsOneCarousel />
      <NewsOne />
      <BannerOne />
      <IntroBannerTwo />
      <CategoriesTwo />
      <CoursesTwo />
      <VideoOne />
      <CountUpOne />
      <TeacherOneCarousel />
      <NewsTwo />
      <NewsletterOne />
      <IntroBannerThree />
      <WhyOne />
      <CoursesThree />
      <BannerTwo />
      <TestimonialsTwoCarousel />
      <CourseFourCarousel />
      <PricesOne />
      <MobileAppsOne />
      <IntroBannerFour />
      <CategoriesThree />
      <CoursesFive />
      <EventsTwo />
      <InstructorsTwoCarousel />
      <BannerThree />
      <IntroBannerFive />
      <CoursesSix />
      <WhyTwo />
      <FeaturesOne />
      <NewsThree />
      <InstructorsThreeCarousel />
      <TestimonialsThree />
      <Tweets />
      <IntroBannerSix />
      <CoursesSeven />
      <CategoriesFour />
      <EventsThree />
      <WhyThree />
      <NewsletterTwo />
      <IntroBannerSeven />
      <CoursesEight />
      <WhyFour />
      <VideoTwo />
      <TestimonialsFourCarousel />
      <CategoriesFive />
      <JobsOne />
      <BannerFour />
      <IntroBannerEight />
      <CategoriesSix />
      <CoursesNine />
      <BannerFive />
      <TestimonialsFiveCarousel />
      <EventsFour />
      <CountUpTwo />
      <NewsletterThree />
      <IntroBannerNine />
      <VideoThree />
      <NewsletterFour />
      <IntroBannerTen />
      <TestimonialsVideo />
      <InstructorsFourCarousel />
      <FeaturesTwo />
      <CountUpThree />
      <EventsFive />
      <BannerSix />
      <IntroBannerEleven />
      <WhyFive />
      <EventsSix />
      <IntroBannerTwelve />
      <CountUpFour />
      <CoursesTen />
      <FeaturesThree />
      <IntroBannerThirteen />
      <VideoFour />
      <IntroBannerFourteen />
      <WhySix />
      <WhySeven />
      <GalleryOne />
      <IntroBannerFifteen />
      <WhyEight />
      <WhyNine />
      <CourseElevenCarousel />
      <CountUpFive />
      <GalleryTwo />
      <BannerSeven />
      <LangSwitch />
    </div>
  );
};

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

export default Home;
