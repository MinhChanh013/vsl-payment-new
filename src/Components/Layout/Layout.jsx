import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterCompoent from "./Footer.jsx";
import HeaderCompoent from "./Header.jsx";
import SiderCompoent from "./Sider.jsx";
import "../../Styles/Global.scss";
const { Header, Footer, Sider, Content } = Layout;
export default function DefaultLayout() {
  const [title, setTitle] = useState("");
  return (
    <Layout
      style={{
        backgroundColor: "var(--background-color)",
        minHeight: "100vh",
      }}
    >
      <Sider
        width={"var(--width-sider)"}
        style={{ backgroundColor: "transparent" }}
      >
        <SiderCompoent />
      </Sider>
      <Layout
        style={{
          backgroundColor: "transparent",
          padding: "0px 20px",
        }}
      >
        <Header
          style={{
            backgroundColor: "transparent",
            height: "var(--height-header)",
            padding: "0px",
            margin: "10px 0px 16px 0px",
          }}
        >
          <HeaderCompoent title={title} />
        </Header>
        <Content>
          <Outlet context={[title, setTitle]} />
        </Content>
        <Footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            boxSizing: "border-box",
            height: "var(--height-footer)",
            padding: "0px",
          }}
        >
          <FooterCompoent />
        </Footer>
      </Layout>
    </Layout>
  );
}
