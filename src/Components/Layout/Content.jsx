import { Button, Card, Col, Row, Typography } from "antd";
const { Title } = Typography;

const Content = ({ left, children, title, type }) => {
  switch (type) {
    case "2-column":
      return (
        <>
          <Title level={3} style={{ margin: "12px" }}>
            {title}
          </Title>
          <Row
            gutter={[8, 8]}
            style={{ marginTop: "8px", marginLeft: "4px", marginRight: "4px" }}
          >
            <Col span={7}>
              <Card
                style={{
                  borderRadius: "0px",
                  display: "flex",
                  boxShadow: "2px 2px 8px rgb(232,232,232)",
                }}
                className="b-card"
              >
                {left}
              </Card>
            </Col>
            <Col span={17}>
              <Card
                className="main-card"
                style={{ boxShadow: "2px 2px 8px rgb(222,222,222)" }}
              >
                {children}
              </Card>
            </Col>
          </Row>
        </>
      );
    default:
      return (
        <>
          <Title level={3} style={{ margin: "12px" }}>
            {title}
          </Title>
          <Card className="main-card">{children}</Card>
        </>
      );
  }
};

export default Content;
