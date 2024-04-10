import { Card, Col, Form, Row } from "antd";
import dayjs from "dayjs";
import * as React from "react";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../Components/DataGrid/index.jsx";
import { Filter, filterType } from "../../Components/Fillter";
import VesselSelect from "../../Components/VesselSelect/VesselSelect.js";
import ToolBar, { toolBarButtonTypes } from "../../Components/ToolbarButton";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";

const SearchTransaction = () => {
  const onFocus = () => {};
  const gridRef = React.createRef();
  const vesselSelectRef = React.useRef();
  const [rows, setRows] = React.useState([]);
  const [dataViewsels, setDataViewsels] = React.useState([]);
  const [form] = Form.useForm();
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
  const buttonConfirm = () => {};
  const handleLoadData = () => {};
  return (
    <>
      <Row
        gutter={[8, 8]}
        style={{ marginTop: "8px", marginLeft: "4px", marginRight: "4px" }}
      >
        <Col span={7}>
          <Card
            title={"[366.8] \r\n GỬI GETIN CONTAINER"}
            style={{ borderRadius: "0px", height: "100%" }}
            className="b-card"
          >
            <Row className="b-row" gutter={[16, 16]}>
              <Col span={24}>
                <VesselSelect ref={vesselSelectRef} data={dataViewsels} />
              </Col>
              <Col span={24}>
                <Filter
                  form={form}
                  items={[
                    {
                      type: filterType.radio,
                      label: "Hướng",
                      config: {
                        name: "imextype",
                        defaultValue: "",
                        options: [
                          {
                            label: "Tất cả",
                            value: "",
                          },
                          {
                            label: "Nhập",
                            value: "1",
                          },
                          {
                            label: "Xuất",
                            value: "2",
                          },
                          {
                            label: "Nội địa",
                            value: "3",
                          },
                        ],
                      },
                    },
                    {
                      type: filterType.radio,
                      label: "Loại hàng",
                      config: {
                        name: "isLF",
                        defaultValue: "",
                        options: [
                          {
                            label: "Tất cả",
                            value: "",
                          },
                          {
                            label: "Hàng ngoại",
                            value: "1",
                          },
                          {
                            label: "Hàng nội",
                            value: "2",
                          },
                        ],
                      },
                    },
                    {
                      type: filterType.radio,
                      label: "Trạng thái thông điệp",
                      config: {
                        name: "marker",
                        defaultValue: "",
                        options: [
                          {
                            label: "Tất cả",
                            value: "",
                          },
                          {
                            label: "Thành công",
                            value: "SuccessMarker",
                          },
                          {
                            label: "Thất bại",
                            value: "ErrorMarker",
                          },
                          {
                            label: "Chưa gửi",
                            value: "UnMarker",
                          },
                        ],
                      },
                    },
                    {
                      type: filterType.radio,
                      label: "Trạng thái container ra khỏi cảng",
                      config: {
                        name: "getout",
                        defaultValue: "",
                        options: [
                          {
                            label: "Tất cả",
                            value: "",
                          },
                          {
                            label: "Chưa ra",
                            value: "1",
                          },
                          {
                            label: "Đã ra",
                            value: "2",
                          },
                        ],
                      },
                    },
                    {
                      type: filterType.radio,
                      label: "Loại hàng",
                      config: {
                        name: "fe",
                        defaultValue: "",
                        options: [
                          {
                            label: "Tất cả",
                            value: "",
                          },
                          {
                            label: "Full",
                            value: "1",
                          },
                          {
                            label: "Empty",
                            value: "0",
                          },
                        ],
                      },
                    },
                    {
                      type: filterType.rangePicker,
                      label: "Khoản",
                      config: {
                        name: "dateFromTo",
                        placeholder: ["Từ", "Đến"],
                        value: "",
                      },
                    },
                    {
                      type: filterType.input,
                      label: "Số Cont",
                      config: {
                        defaultValue: "",
                        name: "cntrNo",
                        placeholder: "",
                        value: "",
                      },
                    },
                  ]}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={17}>
          <Card className="main-card">
            <ToolBar
              buttonConfig={[
                toolBarButtonTypes.load,
                toolBarButtonTypes.send,
                toolBarButtonTypes.cancelgetin,
                toolBarButtonTypes.cancel,
              ]}
              handleConfirm={buttonConfirm}
            />
            <DataGrid
              style={{ height: "80vh" }}
              ref={gridRef}
              direction="ltr"
              columnKeySelected="ID"
              selection={selectionTypes.single}
              columns={columns}
              rows={rows}
              setRows={setRows}
              onFocus={onFocus}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SearchTransaction;
