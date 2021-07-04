import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Content({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>

      {/* 
        This will be placed at the <head/> section of the page. 
        Here we have some global and default settings and a general SEO content
      */}
      <Head>
        <title>NextJS + Tailwind + Styled Components - Demo</title>
        <meta name="language" content="Dutch"></meta>
        <meta
          name="title"
          content="NextJS + Tailwind + Styled Components - Demo"
        />
        <meta
          name="description"
          content="Products feature and price comparison using NextJS + TailwindCSS + StyledComponents"
        />
        <meta
          name="keywords"
          content="product, comparison, react, nextjs, styled-components, tailwindcss"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Tiago Stutz" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/*  NextJS will inline this font, helping to prevent First Contentful Paint (FCP) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;700"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}
