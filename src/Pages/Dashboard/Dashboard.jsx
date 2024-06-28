import { UserOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  Flex,
  Form,
  Input,
  List,
  Row,
  Typography
} from "antd";
import "chart.js/auto";
import VirtualList from "rc-virtual-list";
import React, { createRef, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import TransactionOverviewItem from "./TransactionOverviewItem.jsx";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   Title,
//   ArcElement,
//   plugins,
// } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import DataGrid, { columnTypes, paginationTypes, selectionTypes } from "Components/DataGrid/index.jsx";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   ArcElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

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
    setRows([
      {
        ID: "1",
        JobStatus: "a123",
        StatusMarker: "a123",
        BillOfLading: "a123",
        CargoCtrlNo: "a123",
      },
      {
        ID: "2",
        JobStatus: "a123",
        StatusMarker: "a123",
        BillOfLading: "a123",
        CargoCtrlNo: "a123",
      },
      {
        ID: "3",
        JobStatus: "a123",
        StatusMarker: "a123",
        BillOfLading: "a123",
        CargoCtrlNo: "a123",
      },
    ]);
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
      id: 4,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
    {
      id: 5,
      icon: <UserOutlined className="DashboardIcon" />,
      title: "Tổng số tiền",
      description: "+8% so với 2022",
    },
  ];

  const columns = basicRenderColumns([
    {
      key: "ID",
      name: "ID",
      visible: true,
    },
    {
      key: "JobStatus",
      name: "Hành Động",
      type: columnTypes.TextEditor,
      editable: true,
    },
    {
      key: "StatusMarker",
      name: "Trạng Thái",
      type: columnTypes.TextEditor,
    },
    {
      key: "BillOfLading",
      name: "Số Vận Đơn",
      type: columnTypes.TextEditor,
    },
    {
      key: "CargoCtrlNo",
      name: "Số Định Danh",
      type: columnTypes.TextEditor,
    },
  ]);

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
    maintainAspectRatio: false,
  };
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
              <Typography
                style={{
                  margin: "0px",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Sơ lược về giao dịch
              </Typography>
            </Col>
            <Col span={24}>
              <Typography style={{ fontSize: "1.1rem" }}>năm 2023</Typography>
            </Col>
            <Col span={24}>
              <Flex justify="space-around">
                <TransactionOverviewItem
                  items={OverviewItem}
                  style={{
                    padding: "20px",
                    boxShadow: "none",
                  }}
                  itemInLine={3}
                  gutters={50}
                />
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
              <Typography
                style={{
                  margin: "0px",
                  paddingBottom: "16px",
                  fontWeight: "bold",
                }}
                level={4}
              >
                Giao dịch gần đây
              </Typography>
            </Col>
            <Col span={24}>
              <TransactionOverviewItem
                style={{
                  width: "100%",
                  height: "80px",
                  padding: "10px",
                  paddingLeft: "30px",
                }}
                items={[
                  {
                    title: "Tháng 5",
                    amount: "20.000.000$",
                  },
                ]}
                lineSpace={0}
              />
            </Col>
            <Col span={24}>
              <List>
                <VirtualList
                  data={NoticeItems}
                  height={150}
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
      <Col span={12}>
        <Card
          className="Dashboard-table"
          style={{ height: "300px", padding: "10px", borderRadius: "20px" }}
        >
          <DataGrid
            ref={gridRef}
            direction="ltr"
            columnKeySelected="ID"
            selection={selectionTypes.multi}
            columns={columns}
            rows={rows}
            setRows={setRows}
            onFocus={onFocus}
            pagination={paginationTypes.scroll}
            maxHeight={800}
            limit={5}
          />
        </Card>
      </Col>

      <Col span={12}>
        <Card
          style={{
            padding: "20px",
            borderRadius: "20px",
            height: "300px",
          }}
        >
          <Line
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
                  backgroundColor: "#cee8ff",
                  borderColor: "#8bc9ff",
                  borderWidth: 2,
                  fill: true,
                },
              ],
            }}
            options={{
              ...options,
              plugins: {
                title: {
                  display: true,
                  text: "Chart.js Line Chart - Multi Axis",
                  position: "bottom",
                },
              },
            }}
          />
        </Card>
      </Col>
      <Col span={17}>
        <Card
          style={{
            padding: "32px",
            borderRadius: "20px",
            height: "400px",
          }}
        >
          <Line
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
              ...options,
              plugins: {
                title: {
                  display: true,
                  text: "Chart.js Line Chart - Multi Axis",
                  position: "bottom",
                },
                legend: {
                  display: true, // Hiển thị chú thích
                  position: "right", // Hiển thị chú thích ở bên phải
                },
              },
            }}
          />
        </Card>
      </Col>
      <Col span={7}>
        <Card
          style={{
            padding: "20px",
            borderRadius: "20px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Doughnut
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
              plugins: {
                title: {
                  display: true,
                  text: "Biểu đồ Doughnut",
                  font: {
                    size: 20,
                  },
                },
              },
            }}
          />
          <Typography
            style={{ width: "100%", textAlign: "center", paddingTop: "16px" }}
          >
            Biểu đồ hình tròn
          </Typography>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
