import { Card, Col, Typography, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";

const TransactionOverviewItem = ({
  items = [],
  itemInLine = 1,
  vgutters = 8,
  gutters = 8,
  style,
}) => {
  return (
    <Row gutter={[gutters, vgutters]}>
      {items.map((item, index) => {
        return (
          <Col key={index} span={24 / itemInLine}>
            <Card style={style} className="DashboardCardInfo">
              <Row>
                <Col span={24}>{item.icon !== null ? item.icon : <></>}</Col>
                <Col span={24}>
                  <Typography
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "400",
                    }}
                    className="DashDashboardTitle"
                  >
                    {item.title}
                  </Typography>
                </Col>
                <Col span={24}>
                  <Typography
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                    className="DashDashboardTitle"
                  >
                    {item.amount}
                  </Typography>
                </Col>
                <Col span={24}>
                  <Typography className="DashDashboardTitle">
                    {item.percentChange}
                  </Typography>
                </Col>
              </Row>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default TransactionOverviewItem;
