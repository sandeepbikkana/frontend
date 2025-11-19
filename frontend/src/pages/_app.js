import "@/styles/globals.css";
import "@/styles/swiper.css";
import { Toaster } from "react-hot-toast";
import Head from 'next/head';
import CookieBanner from "@/Component/Cookies/CookieBanner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GTM Labs - From Idea to Influence, Funding to Scale.</title>
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}
