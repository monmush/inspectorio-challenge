import { LeftOutlined } from "@ant-design/icons";
import { Button, Layout as AntLayout, Typography } from "antd";
import React from "react";

type Props = {
  children?: React.ReactNode;
  title: string;
  onBack?: () => void;
};

const Layout: React.FC<Props> = ({ title, children, onBack }) => {
  return (
    <AntLayout className="layout">
      <AntLayout.Header className="layout-header">
        <Button
          icon={<LeftOutlined />}
          type="text"
          style={{ visibility: onBack ? "visible" : "hidden" }}
          className="layout-back"
          onClick={onBack}
        >
          Back
        </Button>

        <Typography.Title level={5} className="layout-title">
          {title}
        </Typography.Title>

        {/* This div acts as a place holder to make sure the title will always be centralized */}
        <div className="layout-placeholder" />
      </AntLayout.Header>

      <AntLayout.Content className="layout-content">
        {children}
      </AntLayout.Content>
    </AntLayout>
  );
};

export default Layout;
