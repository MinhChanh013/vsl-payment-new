import { Typography, Row, Col, Menu, Flex } from "antd";
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
const Sider = () => {
  const items = [
    {
      key: "dashboard",
      name: "dashboard",
      label: <Link to={"/"}>Tổng quát</Link>,
      icon: <HomeFilled />,
    },
    {
      key: "searchTransaction",
      name: "searchTransaction",
      label: <Link to={"/SearchTransaction"}>Tra cứu giao dịch</Link>,
      icon: <InteractionFilled />,
    },
    {
      key: "OrderReconcile",
      name: "OrderReconcile",
      label: <Link to={"/OrderReconcile"}>Đối soát giao dịch</Link>,
      icon: <FileFilled />,
    },
    {
      key: "Report",
      name: "Report",
      label: <Link to={"/Report"}>Báo cáo đối soát</Link>,
      icon: <SignalFilled />,
    },
    {
      key: "DebtAnalysis",
      name: "DebtAnalysis",
      label: <Link to={"/DebtAnalysis"}>Thống kê công nợ</Link>,
      icon: <PieChartFilled />,
    },
    {
      key: "Account",
      name: "Account",
      label: "Tài khoản",
      icon: <CompassFilled />,
      children: [
        {
          key: "user",
          label: <Link to={"/user"}>Người dùng</Link>,
        },
        {
          key: "groupUser",
          label: <Link to={"/groupuser"}>Nhóm người dùng</Link>,
        },
        {
          key: "permission",
          label: <Link to={"/permission"}>Phân quyền</Link>,
        },
      ],
    },
    {
      key: "Help",
      name: "Help",
      label: "Hỗ trợ",
      icon: <MessageFilled />,
    },
    {
      key: "Wallet",
      name: "Wallet",
      label: "Ví V-wallet",
      icon: <WalletFilled />,
    },
  ];
  const handleClick = () => {};
  return (
    <Row className="SiderWrapper" gutter={[0, 18]}>
      <Col span={24} style={{padding: "12px"}}>
        <Link className="SiderTop" to={"/"}>
          <img src="./LOGO.png" />
          <Flex>
            <Typography className="SiderTitle_primary">VSL</Typography>
            <Typography className="SiderTitle_secondary">
              PAYMENT PORTAL
            </Typography>
          </Flex>
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
