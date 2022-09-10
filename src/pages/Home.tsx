import { Button, Drawer, message, Row, Space, Typography } from "antd";
import { AxiosError } from "axios";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Person, { TUser } from "../components/User";
import { axiosClient } from "../services/axios";
import { Endpoint } from "../services/endpoint";

const TOP_5_USERS = [
  "GrahamCampbell",
  "fabpot",
  "weierophinney",
  "rkh",
  "josh",
];

const Home: React.FC = () => {
  const [user, setUser] = useState<TUser>();
  const [loading, setLoading] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState<string>();

  const fetchUser = async (username: string) => {
    setLoading(true);
    try {
      const endpoint = `${Endpoint.Users}/${username}`;
      const res = await axiosClient.get(endpoint);
      return res.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        message.error(JSON.stringify(axiosError.response.data));
      } else {
        message.error("Something when wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const clickUserButton = async (username: string) => {
    setSelectedUsername(username);

    const isDifferentUser = username !== user?.login;

    if (isDifferentUser) {
      const newUser = await fetchUser(username);
      setUser(newUser);
    }
  };

  const renderUsers = (username: string) => (
    <Button
      key={username}
      type="primary"
      onClick={() => clickUserButton(username)}
    >
      {username}
    </Button>
  );

  const closeModal = () => setSelectedUsername(undefined);

  return (
    <Layout title="Home">
      <Space direction="vertical">
        <Typography.Title level={3}>Top 5 Github Users</Typography.Title>
        <Typography.Text>
          Tap the username to see more information
        </Typography.Text>
        <Row style={{ width: "100%", gap: 8 }}>
          {TOP_5_USERS.map(renderUsers)}
        </Row>
      </Space>
      <Drawer
        width="100vw"
        destroyOnClose
        className="person-modal"
        visible={!!selectedUsername}
        onClose={closeModal}
      >
        <Layout title="Person" onBack={closeModal}>
          <Person user={user} loading={loading} />
        </Layout>
      </Drawer>
    </Layout>
  );
};

export default Home;
