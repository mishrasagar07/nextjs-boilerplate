import DefaultLayout from "@/layouts/DefaultLayout";
import { CityTourTheme } from "@/plugins/theme";
import { store } from "@/store/store";
import "@/assets/scss/styles.scss";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="meta description"
        />

        <meta
          property="og:title"
          content="meta title for social media link"
        />
        <meta
          property="og:description"
          content="meta description for social media link"
        />
        <meta
          property="og:image"
          content="img"
        />

        <meta
          name="keywords"
          content=" meta keywords"
        />
        <title>City Tours</title>

        {/* <link rel="icon" href="/favicon.svg"></link> */}
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Provider store={store}>
        <CityTourTheme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CityTourTheme>
      </Provider>
    </>
  );
}
