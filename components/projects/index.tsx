"use client";

import { FC } from "react";
import type { CollapseProps } from "antd";
import { Typography, Collapse } from "antd";

const { Title, Link, Paragraph, Text } = Typography;

const mapContent = (
  <Typography>
    <Paragraph>
      <Link href="https://map.vorkov.com">An app</Link> that allows to select
      countries that you've been visited on the map. It supports authorization
      and store the visited countries state for future reference.
    </Paragraph>
    <Title level={5}>Technology stack</Title>
    <Paragraph>
      <Text strong>Frontend:</Text> Typescript, React with NextJS and Tailwind
      CSS.{" "}
      <Link href="https://github.com/VitVorkov/vorkov.com-maps-web">Repo.</Link>
    </Paragraph>
    <Paragraph>
      <Text strong>Backend:</Text> Typescript, NodeJS with NestJS. PostgreSQL
      with Prisma ORM.{" "}
      <Link href="https://github.com/VitVorkov/vorkov.com-maps-backend">
        Repo.
      </Link>
    </Paragraph>
    <Paragraph>
      <Text strong>Authorization:</Text> Auth0.
    </Paragraph>
  </Typography>
);

const not8Content = (
  <Typography>
    <Paragraph>
      <Link href="https://not8.co">not8</Link> turns any IT product into an
      advanced pin board, making the product review 10X quicker. In a nutshell,
      it allows to create shareable sticky notes for team website review and
      user feedback.
    </Paragraph>
    <Title level={5}>Technology stack</Title>
    <Paragraph>
      <Text strong>Frontend:</Text> Typescript, React with NextJS.
    </Paragraph>
    <Paragraph>
      <Text strong>Backend:</Text> Typescript, NodeJS with NestJS. PostgreSQL
      with Prisma ORM.{" "}
    </Paragraph>
    <Paragraph>
      <Text strong>Integrations:</Text> Zapier and Jira.
    </Paragraph>
  </Typography>
);

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <Title level={4}>Map of visited countries</Title>,
    children: mapContent,
  },
  {
    key: "2",
    label: <Title level={4}>Shareable sticky notes</Title>,
    children: not8Content,
  },
];

export const ProjectsList: FC = () => {
  return <Collapse items={items} />;
};
