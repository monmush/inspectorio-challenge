import React from "react";
import { Button, Layout as AntLayout, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

type Props = {
  children?: React.ReactNode;
  title: string;
  onBack?: () => void;
};

const Layout: React.FC<Props> = ({ title, children, onBack }) => {
  return (
    <AntLayout className="layout">
      <AntLayout.Header className="layout-header">
        {onBack && (
          <Button
            icon={<LeftOutlined />}
            type="text"
            className="layout-back"
            onClick={onBack}
          >
            Back
          </Button>
        )}

        <Typography.Title level={5} className="layout-title">
          {title}
        </Typography.Title>
      </AntLayout.Header>
      <AntLayout.Content className="layout-content">
        {children}
      </AntLayout.Content>
    </AntLayout>
  );
};

export default Layout;
