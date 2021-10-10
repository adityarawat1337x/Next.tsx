import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          [Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          impedit fugiat ullam, cumque molestias quas aliquid quam error,
          dolores hic rerum nobis deserunt quod a.]
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
