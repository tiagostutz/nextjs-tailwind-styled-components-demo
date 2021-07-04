import Head from "next/head";
import Layout from "../../components/layout";
export default function UXUICompare() {
  return (
    <>
      <Layout>
        <div className="container mx-auto max-w-screen-lg pt-8"></div>
      </Layout>

      {/* 
        This will be placed at the <head/> section of the page. 
        This is for SEO optimization
      */}
      <Head>
        <title>NextJS + Tailwind + Styled Components - UX/UI Spec Demo</title>
        <meta
          name="title"
          content="NextJS + Tailwind + Styled Components - UX/UI Spec Demo"
        />
        <meta
          name="description"
          content="Page with the UX/UI spec for Products feature and price comparison using NextJS + TailwindCSS + StyledComponents"
        />
        <meta
          name="keywords"
          content="product, comparison, react, nextjs, styled-components, tailwindcss, ux, ui"
        />
      </Head>
    </>
  );
}
