import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";

export default function Home() {
  const bannerButtonClick = () => {
    console.log("I was clicked");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Maven</title>
        <meta name="description" content="Movie Maven Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View nearby theaters"
          handleOnClick={bannerButtonClick}
        />
      </main>
    </div>
  );
}
