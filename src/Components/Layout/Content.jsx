import { Card, Col, Row } from "antd";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Content = ({ left, children, title, type, style }) => {
  const [titlee, setTitle] = useOutletContext();
  let location = useLocation();
  console.log(location);
  useEffect(() => {
    setTitle([title, location.pathname]);
  }, []);
  switch (type) {
    case "2-column":
      return (
        <Row gutter={[8, 8]} style={{ height: "100%" }}>
          <Col span={7}>
            <Card className="b-card">
              <Row className="b-row" gutter={[8, 12]}>
                {left}
              </Row>
            </Card>
          </Col>
          <Col span={17}>
            <Card className="main-card" style={style}>
              {children}
            </Card>
          </Col>
        </Row>
      );
    default:
      return (
        <Card className="main-card" style={style}>
          {children}
        </Card>
      );
  }
};

export default Content;
