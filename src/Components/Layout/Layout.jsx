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
          padding: "0px 10px",
        }}
      >
        <Header
          style={{
            backgroundColor: "transparent",
            height: "var(--height-header)",
            padding: "0px",
            marginBottom: "16px",
          }}
        >
          <HeaderCompoent title={title} />
        </Header>
        <Content>
          <Outlet context={[title, setTitle]} />
        </Content>
        <Footer
          style={{
            backgroundColor: "transparent",
            boxSizing: "border-box",
            height: "var(--height-footer)",
            padding: "0px",
            marginTop:"12px"
          }}
        >
          <FooterCompoent />
        </Footer>
      </Layout>
    </Layout>
  );
}
