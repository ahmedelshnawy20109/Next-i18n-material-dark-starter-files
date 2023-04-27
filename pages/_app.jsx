/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
// THEME WRAPPER
import ThemeContextProvider from "../theme/theme";
// INTERNATIONALIZATION
import { appWithTranslation } from "next-i18next";
// REDUX STUFF
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
// COMPONENTS
import MainLayout from "../components/layouts/MainLayout";
import Loader from "../components/UIs/Loader/Loader";
// STYLES
import "../public/css/all.min.css";
import "../styles/globals.scss";
// COOKIES SETUP
import Cookies from "universal-cookie";
const cookie = new Cookies();

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { props: returnedProps } = rest;

  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    if (!cookie.get("lms-mode")) {
      cookie.set("lms-mode", "light", { path: "/" });
    }
    if (!cookie.get("lms-lang")) {
      cookie.set("lms-lang", "en", { path: "/" });
    }
    // SHOW AND HIDE LOADING BETWEEN PAGES
    Router.events.on("routeChangeStart", () => {
      setPageLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setPageLoading(false);
    });
  }, []);

  return (
    <div id={returnedProps.locale}>
      <Head>
        <title>Grids Apps LMS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      {pageLoading && <Loader />}

      <ThemeContextProvider>
        <Provider store={store}>
          <MainLayout>
            <Component {...props.pageProps} />
          </MainLayout>
        </Provider>
      </ThemeContextProvider>
    </div>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    return {
      props: {
        locale: context.ctx.locale,
      },
    };
  }
);

export default appWithTranslation(MyApp);
