import {
  Typography,
  Input,
  Row,
  Col,
  Dropdown,
  Button,
  Divider,
  Card,
} from "antd";

import {
  SettingOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Search } = Input;
const { Title } = Typography;
const Header = ({ title }) => {
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
      key: "logout",
      label: <Link to="/login">đăng suất</Link>,
      icon: <LogoutOutlined />,
    },
  ];

  const onClick = ({ key }) => {
    if (key === "logout") localStorage.clear("token");
  };

  return (
    <Card
      style={{
        padding: "0px 50px 0px 30px",
      }}
    >
      <Row align="middle" justify="space-between" style={{ blockSize: "100%"}}>
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            {title}
          </Title>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Search
            size="large"
            placeholder="Tìm kiếm"
            className="HeaderSearch"
          ></Search>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button
              size="large"
              className="HeaderBtn"
              icon={<BellOutlined />}
            />
          </Dropdown>
          <Dropdown
            menu={{ items: SETTING_ITEMS, onClick }}
            placement="bottomRight"
          >
            <Button
              size="large"
              className="HeaderBtn"
              icon={<SettingOutlined />}
            />
          </Dropdown>
          <Divider
            type="vertical"
            style={{
              blockSize: "30px",
              marginInlineEnd: "40px",
              marginInlineStart: "10px",
            }}
          />
          <Row align={"middle"} className="HeaderAcc">
            <Col style={{ paddingInlineEnd: "10px" }}>
              <Typography className="HeaderAccName">{Acc.name}</Typography>
              <Typography className="HeaderAccRole">{Acc.role}</Typography>
            </Col>
            <Col style={{ display: "flex" }}>
              <img className="HeaderAccImg" src={Avatar} alt="avatar"></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Header;
