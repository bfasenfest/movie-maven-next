import styles from "../styles/Card.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const TheaterCard = ({ title, imgUrl, link }) => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div className={styles.container}>
      <Link href={link}>
        <a className={styles.cardLink}>
          <Card shadow="lg" p="lg">
            <Card.Section>
              <div style={{ height: "160px", position: "relative" }}>
                <Image
                  src={imgUrl}
                  layout="fill"
                  alt={title}
                  objectFit="cover"
                />
              </div>
            </Card.Section>

            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>{title}</Text>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              ultricies, tellus sed maximus gravida, leo augue sodales lorem,
              non dignissim mauris nisi sed risus.
            </Text>

            <Button
              variant="light"
              color="blue"
              fullWidth
              style={{ marginTop: 14 }}
            >
              View Theater
            </Button>
          </Card>
        </a>
      </Link>
    </div>
  );
};

export default TheaterCard;
