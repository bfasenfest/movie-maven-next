import Head from "next/head";
import Image from "next/image";
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

        <div className={styles.heroImage}>
          <Image
            className={styles.svg}
            src="/static/cinema-theater-svgrepo-com.svg"
            width={300}
            height={300}
            alt="Movie Theater Art"
          ></Image>
        </div>
      </main>
    </div>
  );
}
