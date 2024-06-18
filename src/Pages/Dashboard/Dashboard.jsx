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
import { useOutletContext } from "react-router-dom";
import Content from "../../Components/Layout/Content.jsx";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const { Title } = Typography;
const { Search } = Input;

const Dashboard = () => {
  const onFocus = () => {};
  const gridRef = createRef();
  const vesselSelectRef = useRef();
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [title, setTitle] = useOutletContext();

  React.useEffect(() => {
    setTitle(["Tổng quát", ""]);
  }, []);

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
    <Row gutter={[30, 30]}>
      <Col span={15}>
        <Card
          style={{
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <Title style={{ margin: "0px", fontWeight: "bold" }} level={4}>
                Sơ lược về giao dịch
              </Title>
            </Col>
            <Col span={24}>
              <Typography style={{ fontSize: "1.1rem" }}>năm 2023</Typography>
            </Col>
            <Col span={24}>
              <Flex justify="space-around">
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
                        boxShadow: "none",
                      }}
                    />
                  );
                })}
              </Flex>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={9}>
        <Card
          style={{
            padding: "20px",
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
      <Col span={16}>
        <Card
          style={{
            padding: "20px",
            borderRadius: "20px",
            height: "400px",
          }}
        >
          <Chart
            type="line"
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Doanh thu",
                  data: [12, 19, 3, 5, 2, 3, 10, 15, 8, 4, 1, 7],
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 2,
                  fill: false,
                },
                {
                  label: "chi tiêu",
                  data: [4, 7, 9, 7, 12, 6, 2, 5, 8, 4, 3, 7],
                  borderColor: "#8bc9ff",
                  borderWidth: 2,
                  fill: false,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "World population per region (in millions)",
              },
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            padding: "20px",
            borderRadius: "20px",
            height: "400px",
            display: "Flex",
            justifyContent: "center",
          }}
        >
          <Chart
            type="doughnut"
            data={{
              labels: ["VSL", "MNR", "CFS"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#e63e30", "#cee8ff", "#058ee3"],
                  data: [24, 52, 10],
                },
              ],
            }}
            option={{
              maintainAspectRatio: false,
            }}
          />
        </Card>
      </Col>
      <Col span={17}></Col>
      <Col span={7}></Col>
    </Row>
  );
};

export default Dashboard;
