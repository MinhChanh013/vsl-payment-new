import { Card, Col, Form, Row, Button, Typography, Flex, Input } from "antd";
import dayjs from "dayjs";
import * as React from "react";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../Components/DataGrid/index.jsx";
import { UserOutlined } from "@ant-design/icons";
import { Filter, filterType } from "../../Components/Fillter";
import ToolBar, { toolBarButtonTypes } from "../../Components/ToolbarButton";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import Statistic from "../../Components/Statistic/index.js";

const { Title } = Typography;
const { Search } = Input;

const Dashboard = () => {
  const onFocus = () => {};
  const gridRef = React.createRef();
  const vesselSelectRef = React.useRef();
  const [rows, setRows] = React.useState([]);
  const [dataViewsels, setDataViewsels] = React.useState([]);
  const [form] = Form.useForm();

  const buttonConfirm = () => {}; // Action cua cac button
  const handleLoadData = () => {}; // xu ly nap ddu lieu
  const handleExport = () => {}; // xu ly xuat excel
  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3} style={{ margin: "12px" }}>
            Tổng quát
          </Title>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={14}>
              <Card>
                <Row>
                  <Col span={24}>
                    <Title level={4}>Sơ lược về giao dịch</Title>
                  </Col>
                  <Col span={24}>
                    <Typography>năm 2023</Typography>
                  </Col>
                  <Col span={24}>
                    <Flex justify="space-around">
                      <Card>
                        <Button icon={<UserOutlined />}></Button>
                        <Typography>10.000.000$</Typography>
                        <Typography>Tổng số tiền</Typography>
                        <Typography>+8% so với 2022</Typography>
                      </Card>
                      <Card>
                        <Button icon={<UserOutlined />}></Button>
                        <Typography>10.000.000$</Typography>
                        <Typography>Tổng số tiền</Typography>
                        <Typography>+8% so với 2022</Typography>
                      </Card>
                      <Card>
                        <Button icon={<UserOutlined />}></Button>
                        <Typography>10.000.000$</Typography>
                        <Typography>Tổng số tiền</Typography>
                        <Typography>+8% so với 2022</Typography>
                      </Card>
                    </Flex>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={8}></Col>
            <Col span={12}></Col>
            <Col span={12}></Col>
            <Col span={17}></Col>
            <Col span={7}></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
