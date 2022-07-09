import { useRouter } from "next/router";
import Link from "next/link";

import Head from "next/head";

import STORES from "../../data/coffee-stores.json";

import Image from "next/dist/client/image";
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

import { HeartPlus } from "tabler-icons-react";

export async function getStaticProps({ params }) {
  return {
    props: {
      theater: STORES.find((theater) => {
        return theater.id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const paths = STORES.map((theater) => {
    return {
      params: {
        id: theater.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

const MovieTheater = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  const { address, name, neighbourhood, websiteUrl, imgUrl } = props.theater;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>

      <div className="ml-[3%] mt-5 text-indigo-800 font-bold cursor-pointer">
        <Link href="/">
          <h3> 🡐 Back To Home</h3>
        </Link>
      </div>

      <h1 className="text-3xl font-bold ml-[3%] mt-5">{name}</h1>

      <Group style={{ marginTop: "20px" }}>
        <div
          style={{
            height: 400,
            width: "45%",
            margin: "auto",
            position: "relative",
          }}
        >
          <Image
            src={imgUrl}
            layout="fill"
            alt={name}
            objectFit="cover"
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div style={{ width: "45%", margin: "auto" }}>
          <Card shadow="sm" p="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={600}>{name}</Text>
            </Group>
            <Text size="xl" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {address}
            </Text>
            <Text size="xl" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              {neighbourhood}
            </Text>
            <HeartPlus size="38" className="inline" />{" "}
            <Text size="xl" className="inline">
              10
            </Text>
            <Group>
              <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                Upvote!
              </Button>
              <a href={websiteUrl} target="_blank" rel="noreferrer">
                <Button variant="light" color="blue" style={{ marginTop: 14 }}>
                  Visit Website
                </Button>
              </a>
            </Group>
          </Card>
        </div>
      </Group>
    </div>
  );
};

export default MovieTheater;
