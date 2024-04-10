import { Typography, Input, Row, Col, Dropdown, Button, Divider } from "antd";
import {
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "../../../Styles/Layout/Header.scss";
const { Search } = Input;
const Header = () => {
  const Avatar = "./avatar.jpg";
  const Acc = {
    name: "VDNAM",
    role: "Admin",
  };
  const items = [
    {
      key: "1",
      label: "option1",
    },
    {
      key: "2",
      label: "option2",
    },
  ];
  const SETTING_ITEMS = [
    {
      key: "1",
      label: "đăng suất",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Row align="bottom" justify="space-between" style={{ height: "100%" }}>
      <Col span={8} style={{ display: "flex" }}>
        <Search
          size="large"
          placeholder="Tìm kiếm"
          className="HeaderSearch"
        ></Search>
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button size="large" className="HeaderBtn" icon={<BellOutlined />} />
        </Dropdown>
        <Dropdown menu={{ items: SETTING_ITEMS }} placement="bottomRight">
          <Button
            size="large"
            className="HeaderBtn"
            icon={<SettingOutlined />}
          />
        </Dropdown>
        <Divider
          type="vertical"
          style={{ height: "30px", marginRight: "40px", marginLeft: "10px" }}
        />
        <Row align={"middle"} className="HeaderAcc">
          <Col style={{ paddingRight: "10px" }}>
            <Typography className="HeaderAccName">{Acc.name}</Typography>
            <Typography className="HeaderAccRole">{Acc.role}</Typography>
          </Col>
          <Col style={{ display: "flex" }}>
            <img className="HeaderAccImg" src={Avatar} alt="avatar"></img>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
