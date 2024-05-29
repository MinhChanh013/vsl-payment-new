import React, { useState, useEffect, createRef, useRef } from "react";
import {
  Card,
  Col,
  Form,
  Row,
  Button,
  Typography,
  Flex,
  Input,
  List,
} from "antd";
import dayjs from "dayjs";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../Components/DataGrid/index.jsx";
import { UserOutlined } from "@ant-design/icons";
import { Filter, filterType } from "../../Components/Fillter";
import ToolBar, { toolBarButtonTypes } from "../../Components/ToolbarButton";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import TransactionOverviewItem from "./TransactionOverviewItem.jsx";
import VirtualList from "rc-virtual-list";

const { Title } = Typography;
const { Search } = Input;

const Dashboard = () => {
  const onFocus = () => {};
  const gridRef = createRef();
  const vesselSelectRef = useRef();
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const OverviewItem = [
    {
      icon: <UserOutlined className="DashboardIcon" />,
      amount: "10.000.000$",
      title: "Tổng số tiền",
      percentChange: "+8% so với 2022",
    },
    {
      icon: <UserOutlined className="DashboardIcon" />,
      amount: "10.000.000$",
      title: "Tổng số tiền",
      percentChange: "+8% so với 2022",
    },
    {
      icon: <UserOutlined className="DashboardIcon" />,
      amount: "10.000.000$",
      title: "Tổng số tiền",
      percentChange: "+8% so với 2022",
    },
  ];

  const NoticeItems = [
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 1,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 2,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 3,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
  ];

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
          <Row
            gutter={[8, 8]}
            style={{ marginTop: "8px", marginLeft: "4px", marginRight: "4px" }}
          >
            <Col span={14}>
              <Card
                style={{
                  padding: "12px",
                  paddingRight: "50px",
                  borderRadius: "20px",
                }}
              >
                <Row>
                  <Col span={24}>
                    <Title
                      style={{ margin: "0px", fontWeight: "bold" }}
                      level={4}
                    >
                      Sơ lược về giao dịch
                    </Title>
                  </Col>
                  <Col span={24}>
                    <Typography
                      style={{ margin: "10px 0px", fontSize: "1.1rem" }}
                    >
                      năm 2023
                    </Typography>
                  </Col>
                  <Col span={24}>
                    <Flex justify="space-between">
                      {OverviewItem.map((item) => {
                        return (
                          <TransactionOverviewItem
                            icon={item.icon}
                            amount={item.amount}
                            title={item.title}
                            percentChange={item.percentChange}
                            style={{
                              width: "250px",
                              height: "186px",
                              padding: "20px",
                            }}
                          />
                        );
                      })}
                    </Flex>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={8} style={{ marginLeft: "30px" }}>
              <Card
                style={{
                  paddingLeft: "12px",
                  borderRadius: "20px",
                }}
              >
                <Row>
                  <Col span={24}>
                    <Title
                      style={{
                        margin: "0px",
                        paddingBottom: "16px",
                        fontWeight: "bold",
                      }}
                      level={4}
                    >
                      Giao dịch gần đây
                    </Title>
                  </Col>
                  <Col span={24}>
                    <TransactionOverviewItem
                      style={{
                        width: "100%",
                        height: "90px",
                        padding: "10px",
                        paddingLeft: "30px",
                      }}
                      title="Tháng 5"
                      amount="20.000.000$"
                      lineSpace={0}
                    />
                  </Col>
                  <Col span={24}>
                    <List>
                      <VirtualList
                        data={NoticeItems}
                        height={200}
                        itemHeight={40}
                        itemKey={"id"}
                      >
                        {(item) => (
                          <List.Item key={item.id}>
                            <List.Item.Meta
                              avatar={item.icon}
                              title={item.title}
                              description={item.description}
                            />
                            <div>Content</div>
                          </List.Item>
                        )}
                      </VirtualList>
                    </List>
                  </Col>
                </Row>
              </Card>
            </Col>
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
