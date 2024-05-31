import { Card, Col, Form, Row, Divider, Typography, Flex, Input } from "antd";
import dayjs from "dayjs";
import * as React from "react";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../Components/DataGrid/index.jsx";
import { Filter, filterType } from "../../Components/Fillter";
import ToolBar, { toolBarButtonTypes } from "../../Components/ToolbarButton";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import Statistic from "../../Components/Statistic/index.js";
import Content from "../../Components/Layout/Content.jsx";

const { Title } = Typography;
const { Search } = Input;

const SearchTransaction = () => {
  const onFocus = () => {};
  const gridRef = React.createRef();
  const [rows, setRows] = React.useState([]);
  const [form] = Form.useForm();
  
  const buttonConfirm = () => {}; // Action cua cac button
  const handleLoadData = () => {}; // xu ly nap ddu lieu
  const handleExport = () => {}; // xu ly xuat excel

  const columns = basicRenderColumns([
    {
      key: "ID",
      name: "ID",
      width: 180,
      visible: true,
    },
    {
      key: "JobStatus",
      name: "Hành Động",
      width: 180,
      type: columnTypes.TextEditor,
      editable: true,
    },
    {
      key: "StatusMarker",
      name: "Trạng Thái",
      width: 100,
      type: columnTypes.TextEditor,
    },
    {
      key: "BillOfLading",
      name: "Số Vận Đơn",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "CargoCtrlNo",
      name: "Số Định Danh",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "CntrNo",
      name: "Số Container",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "GetIn",
      name: "Ngày Getin",
      width: 200,
      type: columnTypes.DatePicker,
    },
    {
      key: "TransportIdentity",
      name: "Tên Tàu",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "NumberOfJourney",
      name: "Chuyến Tàu",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "ArrivalDeparture",
      name: "Ngày tàu đến",
      width: 200,
      type: columnTypes.DatePicker,
    },
    {
      key: "ImExType",
      name: "Nhập/Xuất",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "StatusOfGood",
      name: "Full/Empty",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "JobModeIn",
      name: "Phương Án Vào",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "CargoWeight",
      name: "Trọng Lượng",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "SealNo",
      name: "Số Chì",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "CommodityDescription",
      name: "Mô Tả HH",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "ContainerLocation",
      name: "Vị Trí Count",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "Content",
      name: "Ghi Chú",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "AcceptanceNo",
      name: "Số Tiếp Nhận",
      width: 150,
      type: columnTypes.TextEditor,
    },
    {
      key: "AcceptanceTime",
      name: "Ngày Tiếp Nhận",
      width: 220,
      type: columnTypes.DatePicker,
    },
    {
      key: "ResponseText",
      name: "Nội Dung Phản Hồi",
      width: 180,
      type: columnTypes.TextEditor,
    },
    {
      key: "MsgRef",
      name: "Khóa Tham Chiếu",
      width: 300,
      type: columnTypes.TextEditor,
    },
  ]);

  const LIST_STATISTIC = [
    {
      label: "Số lượng giao dịch (VSL)",
      value: 24,
    },
    {
      label: "Số lượng giao dịch (NH)",
      value: 24,
    },
    {
      label: "Số lượng giao dịch cân khớp",
      value: 24,
    },
    {
      label: "Số lượng giao dịch thừa cảng",
      value: 24,
    },
    {
      label: "Số lượng giao dịch thùa NH",
      value: 24,
    },
  ];
  return (
    <Content
      type={"2-column"}
      title={"TRA CỨU GIAO DỊCH"}
      left={
        <>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            span={24}
          >
            <ToolBar
              buttonConfig={[
                toolBarButtonTypes.load,
                toolBarButtonTypes.exportexcel,
              ]}
              handleConfirm={buttonConfirm}
            />
          </Col>
          <Divider
            style={{
              margin: "0px",
              color: "var(--red-color)",
              border: "var(--red-color)",
            }}
          >
            Lọc dữ liệu
          </Divider>
          <Col span={24}>
            <Filter
              form={form}
              items={[
                {
                  type: filterType.dropdown,
                  label: "Khách hàng",
                  config: {
                    name: "Customer",
                    initialValues: "",
                    options: [
                      {
                        label: "Tất cả",
                        value: "",
                      },
                      {
                        label: "Gemadept",
                        value: "1",
                      },
                      {
                        label: "Ceh",
                        value: "2",
                      },
                    ],
                  },
                },
                {
                  type: filterType.dropdown,
                  label: "Hệ thống",
                  config: {
                    name: "System",
                    initialValues: "",
                    options: [
                      {
                        label: "Tất cả",
                        value: "",
                      },
                      {
                        label: "MNR",
                        value: "1",
                      },
                      {
                        label: "CAS",
                        value: "2",
                      },
                      {
                        label: "VSL",
                        value: "3",
                      },
                    ],
                  },
                },
                {
                  type: filterType.input,
                  label: "Mã giao dịch",
                  config: {
                    initialValues: "",
                    name: "TransactionCode",
                    placeholder: "Mã giao dịch",
                    value: "",
                  },
                },
                {
                  type: filterType.rangePicker,
                  label: "Ngày giao dịch",
                  config: {
                    name: "dateFromTo",
                    placeholder: ["Từ ngày", "Đến ngày"],
                    value: "",
                  },
                },
                {
                  type: filterType.radio,
                  label: "Cổng thanh toán",
                  config: {
                    name: "Portal",
                    initialValues: "",
                    options: [
                      {
                        label: "Tất cả",
                        value: "",
                      },
                      {
                        label: "MB Bank",
                        value: "MBB",
                      },
                      {
                        label: "Thẻ nội địa",
                        value: "Debit",
                      },
                    ],
                  },
                },
                {
                  type: filterType.radio,
                  label: "Trạng thái giao dịch",
                  config: {
                    name: "Status",
                    initialValues: "",
                    options: [
                      {
                        label: "Tất cả",
                        value: "",
                      },
                      {
                        label: "Gián đoạn",
                        value: "MBB",
                      },
                      {
                        label: "Thành công",
                        value: "Debit",
                      },
                      {
                        label: "Thất bại",
                        value: "Fail",
                      },
                    ],
                  },
                },
              ]}
            />
          </Col>
          <Divider
            style={{
              margin: "0px",
              color: "#FF2626",
              border: "#FF2626",
            }}
          >
            Thống kê
          </Divider>
          <Col span={24}>
            <Statistic items={LIST_STATISTIC}></Statistic>
          </Col>
        </>
      }
    >
      <Flex
        align="center"
        justify="space-between"
        style={{ padding: "10px 20px" }}
      >
        <Search
          placeholder="Tìm kiếm"
          className="HeaderSearch"
          style={{ width: "24%" }}
        ></Search>
        <Typography>Số dòng: 0</Typography>
      </Flex>
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
    </Content>
  );
};

export default SearchTransaction;
