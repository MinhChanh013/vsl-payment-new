import { Typography, Card, Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  AlignLeftOutlined,
  FileOutlined,
  BarChartOutlined,
  EditOutlined,
  UserOutlined,
  MessageOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../../Styles/Layout/Sider.scss";
const Sider = () => {
  const items = [
    {
      key: "1",
      name: "dashboard",
      label: "Tổng quát",
      icon: <HomeOutlined />,
    },
    {
      key: "2",
      name: "searchTransaction",
      label: "Tra cứu giao dịch",
      icon: <AlignLeftOutlined />,
    },
    {
      key: "3",
      name: "OrderReconcile",
      label: "Đối soát giao dịch",
      icon: <FileOutlined />,
    },
    {
      key: "4",
      name: "Report",
      label: "Báo cáo đối soát",
      icon: <BarChartOutlined />,
    },
    {
      key: "5",
      name: "DebtAnalysis",
      label: "Thống kê công nợ",
      icon: <EditOutlined />,
    },
    {
      key: "6",
      name: "Account",
      label: "Tài khoản",
      icon: <UserOutlined />,
    },
    {
      key: "7",
      name: "Help",
      label: "Hỗ trợ",
      icon: <MessageOutlined />,
    },
    {
      key: "8",
      name: "Wallet",
      label: "Ví V-wallet",
      icon: <WalletOutlined />,
    },
  ];
  const handleClick = () => {};
  return (
    <Row className="SiderWrapper">
      <Col span={24}>
        <Link className="SiderTop" to={"/"}>
          <img src="./LOGO.png" />
          <Typography className="SiderTitle">
            VIETNAM SMARTHUB LOGISTICS
          </Typography>
        </Link>
      </Col>
      <Col span={24}>
        <Menu
          style={{ border: "none" }}
          onClick={handleClick}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          className="SiderMenu"
        />
      </Col>
    </Row>
  );
};

export default Sider;
