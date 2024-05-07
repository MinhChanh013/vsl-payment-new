import {
  Typography,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  Flex,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import "../../Styles/Login/Login.scss";
import { useState } from "react";
import { auth } from "../../services";

const { Title } = Typography;
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      const result = await auth.Login(e);
      if (result) navigate("/");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <Row align={"middle"} justify={"center"} className="LoginWrapper">
      <Col className="Col" span={12}>
        <Row gutter={[0, 36]} style={{ width: "45%" }}>
          <Col className="Col" span={24} style={{ marginBottom: "30px" }}>
            <img className="LoginLogo" src="./LOGO.png" alt="Logo"></img>
            <Typography className="LoginName">
              VIETNAM SMARTHUB LOGISTICS
            </Typography>
          </Col>
          <Col style={{ display: "flex", position: "relative" }} span={24}>
            <Title level={3} style={{ margin: "0px" }}>
              Đăng nhập
            </Title>
            <Title
              level={3}
              style={{
                margin: "0px",
                paddingLeft: "6px",
                color: "white",
                zIndex: "2",
              }}
            >
              cổng thanh toán
            </Title>
            <img
              className="LoginTitleHighline"
              src="./highline.png"
              alt="Highline"
            ></img>
          </Col>
          <Col className="Col" span={24}>
            <Form
              style={{ width: "100%" }}
              wrapperCol={{ span: 24 }}
              name="basic"
              initialValues={{
                remember: false,
              }}
              autoComplete="off"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên đăng nhập!",
                  },
                ]}
              >
                <Input
                  className="LoginInfor"
                  placeholder="Tên người dùng"
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                ]}
              >
                <Input.Password
                  className="LoginInfor"
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                  iconRender={(visible) =>
                    visible ? <EyeInvisibleOutlined /> : <EyeOutlined />
                  }
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Flex align="center" justify="space-between">
                  <Checkbox
                    style={{
                      fontSize: "1rem",
                      color: "#3b4bc2",
                      fontWeight: "bold",
                    }}
                  >
                    Lưu đăng nhập
                  </Checkbox>
                  <Link
                    style={{
                      color: "#3b4bc2",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Quên mật khẩu?
                  </Link>
                </Flex>
              </Form.Item>

              <Form.Item>
                <Button
                  className="LoginButtonConfirm"
                  disabled={isLoading}
                  type="default"
                  htmlType="submit"
                  icon={<LoginOutlined />}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row gutter={[0, 80]} align={"top"} justify={"center"}>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title
              style={{
                margin: "0px",
                color: "var(--red-color)",
                paddingRight: "20px",
                fontSize: "2.4rem",
              }}
            >
              P
            </Title>
            <Title
              style={{
                margin: "0px",
                color: "white",
                letterSpacing: "20px",
                fontSize: "2.4rem",
              }}
            >
              ayment portal
            </Title>
          </Col>
          <Col span={24} className="Col">
            <img
              style={{ width: "60%" }}
              className="LoginThumb"
              src="./Thumb.svg"
              alt="Thumb"
            ></img>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
