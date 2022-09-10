import { Avatar, List, Skeleton } from "antd";
import React from "react";

export type TUser = {
  avatar_url: string | null;
  name: string | null;
  login: string;
  location: string | null;
} & Record<string, unknown>;

type Props = {
  user: TUser | undefined;
  loading: boolean;
};

const FALLBACK_VALUE = "N/A";

const User: React.FC<Props> = ({ user, loading }) => {
  const { avatar_url, name, location } = user || {};

  return (
    <List>
      <Skeleton loading={loading} active avatar>
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={avatar_url} />}
            title={name ?? FALLBACK_VALUE}
            description={location ?? FALLBACK_VALUE}
          />
        </List.Item>
      </Skeleton>
    </List>
  );
};

export default User;
