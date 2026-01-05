"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Layout, ConfigProvider } from "antd";

export default function LandingPage() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 8,
        },
      }}
    >
      <Layout className="min-h-screen bg-white">
        <PageHeader title="แลนดิ้ง" />
      </Layout>
    </ConfigProvider>
  );
}
