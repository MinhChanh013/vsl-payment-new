import { Form, Flex } from "antd";
import * as React from "react";
import DataGrid, {
  columnTypes,
  paginationTypes,
  selectionTypes,
} from "../../components/DataGrid/index.jsx";
import { Filter, filterType } from "../../components/Fillter/index.jsx";
import ToolBar, {
  toolBarButtonTypes,
} from "../../components/ToolbarButton/index.js";
import { basicRenderColumns } from "../../utils/dataTable.utils.js";
import Content from "../../components/Layout/Content.jsx";
import { MInput } from "components/BasicUI/index.jsx";

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
      type: columnTypes.TextEditor,
    },
    {
      key: "Code",
      name: "Mã người dùng",
      type: columnTypes.TextEditor,
    },
    {
      key: "CargoCtrlNo",
      name: "Tên Người dùng",
      type: columnTypes.TextEditor,
    },
    {
      key: "CntrNo",
      name: "Mật khẩu",
      type: columnTypes.TextEditor,
    },
    {
      key: "GetIn",
      name: "Mật khẩu mặc định",
      type: columnTypes.DatePicker,
    },
    {
      key: "Birthday",
      name: "Ngày sinh",
      type: columnTypes.TextEditor,
    },
    {
      key: "Email",
      name: "Email",
      type: columnTypes.TextEditor,
    },
    {
      key: "Status",
      name: "Trạng thái",
      type: columnTypes.DatePicker,
    },
  ]);

  return (
    <Content type={"1-column"} title={"QUẢN LÝ NGƯỜI DÙNG"}>
      <Flex
        align="center"
        justify="space-between"
        style={{ padding: "10px 20px" }}
      >
        <MInput
          inputSearch
          placeholder="Tìm kiếm"
          className="HeaderSearch"
          style={{ width: "20%" }}
        ></MInput>
        <ToolBar
          buttonConfig={[
            toolBarButtonTypes.add,
            toolBarButtonTypes.delete,
            toolBarButtonTypes.save,
          ]}
          handleConfirm={buttonConfirm}
        />
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
