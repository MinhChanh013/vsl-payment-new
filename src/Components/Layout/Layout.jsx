import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import FooterCompoent from "./Footer/Footer.jsx";
import HeaderCompoent from "./Header/Header.jsx";
import SiderCompoent from "./Sider/Sider.jsx";
import "../../Styles/GlobalStyles/GlobalStyles.scss";
const { Header, Footer, Sider, Content } = Layout;
export default function DefaultLayout() {
  return (
    <Layout style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
      <Sider width={"var(--width-sider)"} style={{ backgroundColor: "white" }}>
        <SiderCompoent />
      </Sider>
      <Layout style={{ backgroundColor: "transparent", padding: "0px 20px 0px 15px" }}>
        <Header
          style={{
            backgroundColor: "transparent",
            height: "var(--height-header)",
            padding: "0px 10px",
          }}
        >
          <HeaderCompoent />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer
          style={{
            backgroundColor: "transparent",
            boxSizing: "border-box",
            height: "var(--height-footer)",
            padding: "12px"
          }}
        >
          <FooterCompoent />
        </Footer>
      </Layout>
    </Layout>
  );
}
