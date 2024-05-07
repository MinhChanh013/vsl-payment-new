import { Flex, Row, Col, Typography } from "antd";
const { Title } = Typography;

const Statistic = ({ items = [] }) => {
  return (
    <Row gutter={[0, 18]}>
      {items.map((item) => {
        return (
          <Col span={24}>
            <Flex justify="space-between">
              <Title level={5} style={{ margin: "0px" }}>
                {item.label}
              </Title>
              <Title
                level={5}
                style={{ margin: "0px", color: "var(--red-color)" }}
              >
                ........ {item.value}
              </Title>
            </Flex>
          </Col>
        );
      })}
    </Row>
  );
};

export default Statistic;
