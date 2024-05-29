import { Card, Col, Form, Row, Divider, Typography, Flex, Input } from "antd";
import * as React from "react";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../Components/DataGrid/index.jsx";
import { Filter, filterType } from "../../Components/Fillter";
import ToolBar, { toolBarButtonTypes } from "../../Components/ToolbarButton";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import Content from "../../Components/Layout/Content.jsx";

const { Search } = Input;

const User = () => {
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
      key: "STT",
      name: "STT",
      width: 70,
      type: columnTypes.TextEditor,
      editable: true,
    },
    {
      key: "GroupUser",
      name: "Nhóm người dùng",
      width: 180,
      type: columnTypes.TextEditor,
    },
    {
      key: "Code",
      name: "Mã người dùng",
      width: 180,
      type: columnTypes.TextEditor,
    },
    {
      key: "CargoCtrlNo",
      name: "Tên Người dùng",
      width: 180,
      type: columnTypes.TextEditor,
    },
    {
      key: "CntrNo",
      name: "Mật khẩu",
      width: 180,
      type: columnTypes.TextEditor,
    },
    {
      key: "GetIn",
      name: "Mật khẩu mặc định",
      width: 200,
      type: columnTypes.DatePicker,
    },
    {
      key: "Birthday",
      name: "Ngày sinh",
      width: 180,
      type: columnTypes.TextEditor,
    },
    {
      key: "Email",
      name: "Email",
      width: 170,
      type: columnTypes.TextEditor,
    },
    {
      key: "Status",
      name: "Trạng thái",
      width: 200,
      type: columnTypes.DatePicker,
    },
  ]);

  return (
    <Content type={"1-column"} title={"Quản lý người dùng"}>
      <Flex
        align="center"
        justify="space-between"
        style={{ padding: "10px 20px" }}
      >
        <Search
          size="large"
          placeholder="Tìm kiếm"
          className="HeaderSearch"
          style={{ width: "30%" }}
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
        limit={5}
      />
    </Content>
  );
};

export default User;
