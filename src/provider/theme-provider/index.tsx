import React from "react";
import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3A4BA7", // Primary Indigo color for main elements
          colorFillSecondary: "#A8E6CF", // Secondary Mint color for backgrounds and fills
          colorBgBase: "#F7F5F2", // Light Sand color as the base background color
          colorTextBase: "#333333", // Charcoal color for primary text
        },
        components: {
          Button: {
            controlHeight: 45,
            controlOutline: "0",
            borderRadius: 0,
          },
          Input: {
            controlHeight: 45,
            controlOutline: "0",
            borderRadius: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ThemeProvider;
