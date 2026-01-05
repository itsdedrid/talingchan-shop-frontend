"use client";

import React from "react";
import { Layout, Typography, Menu } from "antd";
import { AppstoreOutlined, ShoppingOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header } = Layout;
const { Title } = Typography;

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      key: "/cards",
      icon: <AppstoreOutlined />,
      label: <Link href="/cards">Cards</Link>,
    },
    {
      key: "/products",
      icon: <ShoppingOutlined />,
      label: <Link href="/products">Products</Link>,
    },
  ];

  // Determine selected key based on pathname
  const selectedKey = pathname.startsWith("/products") ? "/products" : pathname.startsWith("/cards") ? "/cards" : "";

  return (
    <Header className="sticky top-0 z-20 !bg-gray-50 border-b border-gray-200 px-4 md:px-8 h-auto py-0">
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo and Title Section */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex-shrink-0 -ml-3">
            <Image 
              src="/images/icon/logo.png" 
              alt="Logo" 
              width={60} 
              height={60}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          
          <div className="hidden md:block">
            <Title level={4} className="!mb-0 !text-gray-800">
              {title}
            </Title>
            {subtitle && (
              <Typography.Text type="secondary" className="text-xs">
                {subtitle}
              </Typography.Text>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
          className="border-0 !bg-gray-50 flex-1 justify-end"
        />
      </div>
    </Header>
  );
}
