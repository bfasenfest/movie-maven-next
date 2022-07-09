import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import { Grid, Center } from "@mantine/core";
import TheaterCard from "../components/theater-card";

import STORES from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: { theaters: STORES }, // will be passed to the page component as props
  };
}

export default function Home(props) {
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
        {props.theaters.length > 0 && (
          <>
            <h1 className={styles.theaterHeading}>Other Theaters</h1>
            <Center>
              <Grid grow>
                {props.theaters.map((store) => {
                  return (
                    <Grid.Col xs={6} md={4} lg={3} key={store.id}>
                      <TheaterCard
                        imgUrl={store.imgUrl}
                        title={store.name}
                        link={`/movie-theater/${store.id}`}
                      />
                    </Grid.Col>
                  );
                })}
              </Grid>
            </Center>
          </>
        )}
      </main>
    </div>
  );
}
