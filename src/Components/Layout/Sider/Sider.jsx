import { Typography, Row, Col, Menu } from "antd";
import {
  HomeFilled,
  InteractionFilled,
  FileFilled,
  PieChartFilled,
  SignalFilled,
  CompassFilled,
  MessageFilled,
  WalletFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../../Styles/Layout/Sider.scss";
const Sider = () => {
  const items = [
    {
      key: "1",
      name: "dashboard",
      label: <Link to={"/"}>Tổng quát</Link>,
      icon: <HomeFilled />,
    },
    {
      key: "2",
      name: "searchTransaction",
      label: <Link to={"/SearchTransaction"}>Tra cứu giao dịch</Link>,
      icon: <InteractionFilled />,
    },
    {
      key: "3",
      name: "OrderReconcile",
      label: <Link to={"/OrderReconcile"}>Đối soát giao dịch</Link>,
      icon: <FileFilled />,
    },
    {
      key: "4",
      name: "Report",
      label: <Link to={"/Report"}>Báo cáo đối soát</Link>,
      icon: <SignalFilled />,
    },
    {
      key: "5",
      name: "DebtAnalysis",
      label: <Link to={"/DebtAnalysis"}>Thống kê công nợ</Link>,
      icon: <PieChartFilled />,
    },
    {
      key: "6",
      name: "Account",
      label: "Tài khoản",
      icon: <CompassFilled />,
    },
    {
      key: "7",
      name: "Help",
      label: "Hỗ trợ",
      icon: <MessageFilled />,
    },
    {
      key: "8",
      name: "Wallet",
      label: "Ví V-wallet",
      icon: <WalletFilled />,
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
