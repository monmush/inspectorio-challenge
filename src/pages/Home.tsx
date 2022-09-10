import { Button, Space, Typography } from "antd";
import React, { useState } from "react";
import Layout from "../components/Layout";

const TOP_5_USERS = [
  "GrahamCampbell",
  "fabpot",
  "weierophinney",
  "rkh",
  "josh",
];

const Home: React.FC = () => {
  const [selectedUsername, setSelectedUsername] = useState<
    string | undefined
  >();

  const renderUsers = (username: string) => {
    return (
      <Button
        key={username}
        type="primary"
        onClick={() => setSelectedUsername(username)}
      >
        {username}
      </Button>
    );
  };

  return (
    <Layout title="Home">
      <Space direction="vertical">
        <Typography.Title level={3}>Top 5 Github Users</Typography.Title>
        <Typography.Text>
          Tap the username to see more information
        </Typography.Text>
        <Space>{TOP_5_USERS.map(renderUsers)}</Space>
      </Space>
    </Layout>
  );
};

export default Home;
