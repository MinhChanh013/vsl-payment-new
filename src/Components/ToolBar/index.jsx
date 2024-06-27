/* eslint-disable react-hooks/exhaustive-deps */
import {
  AppstoreAddOutlined,
  CheckOutlined,
  CloseOutlined,
  CloudDownloadOutlined,
  DeleteOutlined,
  FileExcelOutlined,
  ImportOutlined,
  PlusCircleOutlined,
  ReloadOutlined,
  SendOutlined,
  SettingOutlined,
  VerticalAlignBottomOutlined,
  WarningOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Input, Modal, Row, Space } from "antd";
import * as React from "react";

export const toolBarButtonTypes = {
  load: {
    id: "load",
    label: "Nạp dữ liệu",
    fontColor: "#2399fa",
    icon: (
      <CloudDownloadOutlined style={{ stroke: "#2399fa", strokeWidth: 30 }} />
    ),
  },
  send: {
    id: "send",
    label: "Gởi thông điệp",
    fontColor: "#f5a442",
    icon: <SendOutlined style={{ stroke: "#f5a442", strokeWidth: 30 }} />,
    alert: true,
    message: "Bạn có muốn gởi thông điệp?",
  },
  cancel: {
    id: "cancel",
    label: "Hủy gửi",
    fontColor: "#f54f40",
    icon: <CloseOutlined style={{ stroke: "#f54f40", strokeWidth: 30 }} />,
    alert: true,
    message: "Bạn có muốn hủy gửi thông điệp?",
  },
  cancelgetin: {
    id: "cancelgetin",
    label: "Hủy getin",
    fontColor: "#f54f40",
    icon: <CloseOutlined style={{ stroke: "#f54f40", strokeWidth: 30 }} />,
    alert: true,
    message: "Bạn có muốn hủy getin?",
  },
  save: {
    id: "save",
    label: "Lưu dữ liệu",
    fontColor: "#50a81d",
    icon: (
      <CloudDownloadOutlined style={{ stroke: "#50a81d", strokeWidth: 30 }} />
    ),
    alert: true,
    message: "Bạn có muốn lưu dữ liệu?",
  },
  delete: {
    id: "delete",
    label: "Xóa dòng",
    fontColor: "#f54f40",
    icon: <DeleteOutlined style={{ stroke: "#f54f40", strokeWidth: 30 }} />,
    alert: true,
    message: "Bạn có muốn xóa dữ liệu?",
  },
  deletegetout: {
    id: "delete_getout",
    label: "Xóa Getout",
    fontColor: "#f54f40",
    icon: <DeleteOutlined style={{ stroke: "#f54f40", strokeWidth: 30 }} />,
    alert: true,
    message: "Bạn có muốn xóa getout?",
  },
  newdeclare: {
    id: "new_declare",
    label: "Quét tờ khai mới",
    fontColor: "#2399fa",
    icon: <SendOutlined style={{ stroke: "#2399fa", strokeWidth: 30 }} />,
  },
  exportFile: {
    id: "exportFile",
    label: "Xuất File",
    fontColor: "#2399fa",
    icon: <FileExcelOutlined />,
  },
  exportexcel: {
    id: "export_excel",
    label: "Xuất Excel",
    fontColor: "#2399fa",
    icon: <FileExcelOutlined />,
  },
  exportExcelAndImage: {
    id: "exportExcelAndImage",
    label: "Xuất Excel và hình ảnh",
    fontColor: "#2399fa",
    icon: <FileExcelOutlined />,
  },
  importExcel: {
    id: "importExcel",
    label: "Nhập Excel",
    fontColor: "#2399fa",
    icon: <ImportOutlined />,
  },
  add: {
    id: "add",
    label: "Thêm dòng",
    fontColor: "#039cfd",
    icon: <PlusCircleOutlined style={{ stroke: "#039cfd", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  add_modal: {
    id: "add_modal",
    label: "Thêm dòng",
    fontColor: "#039cfd",
    icon: <PlusCircleOutlined style={{ stroke: "#039cfd", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  import: {
    id: "import",
    label: "Import",
    fontColor: "#039cfd",
    icon: (
      <VerticalAlignBottomOutlined
        style={{ stroke: "#039cfd", strokeWidth: 30 }}
      />
    ),
    alert: false,
    message: "",
  },
  refresh: {
    id: "refresh",
    label: "Làm mới trang",
    fontColor: "#50a81d",
    icon: <ReloadOutlined style={{ stroke: "#50a81d", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  setting: {
    id: "setting",
    label: "Cấu hình",
    fontColor: "#f5a442",
    icon: <SettingOutlined style={{ stroke: "#f5a442", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  complete: {
    id: "complete",
    label: "Hoàn thành",
    fontColor: "#50a81d",
    icon: <CheckOutlined style={{ stroke: "#50a81d", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  edit: {
    id: "edit",
    label: "Sữa chữa",
    fontColor: "#2399fa",
    icon: <EditOutlined style={{ stroke: "#2399fa", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  confirm: {
    id: "confirm",
    label: "Xác nhận",
    fontColor: "#50a81d",
    icon: <CheckOutlined style={{ stroke: "#50a81d", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  permision_all: {
    id: "permision_all",
    label: "Phân quyền tất cả",
    fontColor: "#50a81d",
    icon: <CheckOutlined style={{ stroke: "#50a81d", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  remove_permision_all: {
    id: "remove_permision_all",
    label: "Bỏ tất cả phân quyền ",
    fontColor: "#50a81d",
    icon: <DeleteOutlined style={{ stroke: "#f54f40", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  reset_permision: {
    id: "reset_permision",
    label: "Làm mới",
    fontColor: "#50a81d",
    icon: <ReloadOutlined style={{ stroke: "#50a81d", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
  addMenu: {
    id: "addMenu",
    label: "Thêm Menu",
    fontColor: "#039cfd",
    icon: <PlusCircleOutlined style={{ stroke: "#039cfd", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
};

// const ToolBar = ({ buttonConfig, cardConfig, handleConfirm }) => {
//   const [openModal] = useState(false);
//   const [numb, setNumb] = useState();

//   return (
//     <>
//       <div
//         style={{
//           padding: "12px 4px",
//           width: "fit-content",
//           display: "flex",
//           justifyContent: "flex-end",
//         }}
//       >
//         <Space size={0}>
//           {buttonConfig.map((item, index) => {
//             return (
//               <>
//                 {index !== 0 ? (
//                   <Divider
//                     key={index}
//                     type="vertical"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(rgba(153, 153, 153, 0.1) 0px, rgb(179 176 176) 40%, rgb(169 167 167) 60%, rgba(153, 153, 153, 0.1) 100%)",
//                       height: "24px",
//                       width: "1.8px",
//                       paddingRight: "1px",
//                       borderRadius: 0,
//                     }}
//                   />
//                 ) : (
//                   ""
//                 )}
//                 <Button
//                   className={`toolbar ${item.id}`}
//                   key={item.id}
//                   type="default"
//                   icon={item.icon}
//                   style={{ lineHeight: "14px" }}
//                   onClick={() => {
//                     if (item.id === "add") {
//                       Modal.confirm({
//                         title: "Thêm dữ liệu",
//                         content: (
//                           <>
//                             <Row>
//                               <Col span={24}>Nhập số dòng</Col>
//                               <Col span={24}>
//                                 <Input
//                                   type="number"
//                                   onChange={(e) => {
//                                     console.log(e.target.value);
//                                     setNumb(e.target.value);
//                                     console.log(numb);
//                                   }}
//                                 />
//                               </Col>
//                             </Row>
//                           </>
//                         ),
//                         open: { openModal },
//                         icon: <AppstoreAddOutlined />,
//                         okText: "Xác nhận",
//                         cancelText: "Hủy",
//                         onCancel: () => {
//                           return;
//                         },
//                         onOk: async () => {
//                           await handleConfirm({ type: item.id, value: numb });
//                         },
//                         footer: (_, { OkBtn, CancelBtn }) => (
//                           <>
//                             <CancelBtn />
//                             <OkBtn />
//                           </>
//                         )
//                       });
//                     } else if (item.alert) {
//                       Modal.confirm({
//                         title: "Cảnh báo!",
//                         content: item.message,
//                         open: { openModal },
//                         icon: <WarningOutlined />,
//                         okText: "Xác nhận",
//                         cancelText: "Hủy",
//                         onCancel: () => {
//                           return;
//                         },
//                         onOk: () => {
//                           handleConfirm({ type: item.id });
//                         },
//                         footer: (_, { OkBtn, CancelBtn }) => (
//                           <>
//                             <CancelBtn />
//                             <OkBtn />
//                           </>
//                         ),
//                       });
//                     } else {
//                       handleConfirm({ type: item.id });
//                     }
//                   }}
//                 >
//                   {item.label.toUpperCase()}
//                 </Button>
//               </>
//             );
//           })}
//         </Space>
//       </div>
//     </>
//   );
// };
// export default ToolBar;

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      numb: 1,
    };
  }

  render() {
    return (
      <>
        <div
          style={{
            padding: "12px 4px",
            width: "fit-content",
            display: "flex",
            justifyContent: "flex-end",
            ...this.props?.style,
          }}
        >
          <Space size={0}>
            {this.props.buttonConfig.map((item, index) => {
              if (Object.keys(item).length > 0) {
                return (
                  <React.Fragment key={index}>
                    {/* {index !== 0 ? (
                    <Divider
                      key={index}
                      type="vertical"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(153, 153, 153, 0.1) 0px, rgb(179 176 176) 40%, rgb(169 167 167) 60%, rgba(153, 153, 153, 0.1) 100%)",
                        height: "24px",
                        width: "1.8px",
                        paddingRight: "1px",
                        borderRadius: 0,
                      }}
                    />
                  ) : (
                    ""
                  )} */}
                    <Button
                      className={`toolbar ${item.id}`}
                      key={item.id}
                      type="default"
                      icon={item.icon}
                      style={{ lineHeight: "14px" }}
                      disabled={item.disabled}
                      onClick={() => {
                        if (item.id === "add") {
                          Modal.confirm({
                            title: "Thêm dữ liệu",
                            content: (
                              <>
                                <Row>
                                  <Col span={24}>Nhập số dòng</Col>
                                  <Col span={24}>
                                    <Input
                                      defaultValue={this.state.numb}
                                      type="number"
                                      onChange={(e) => {
                                        this.setState({ numb: e.target.value });
                                      }}
                                    />
                                  </Col>
                                </Row>
                              </>
                            ),
                            open: this.state.openModal,
                            icon: <AppstoreAddOutlined />,
                            okText: "Xác nhận",
                            cancelText: "Hủy",
                            onCancel: () => {
                              return;
                            },
                            onOk: async () => {
                              this.props.handleConfirm({
                                type: item.id,
                                value: this.state.numb,
                              });
                            },
                            footer: (_, { OkBtn, CancelBtn }) => (
                              <>
                                <CancelBtn />
                                <OkBtn />
                              </>
                            ),
                          });
                        } else if (item.alert) {
                          Modal.confirm({
                            title: "Cảnh báo!",
                            content: item.message,
                            open: this.state.openModal,
                            icon: <WarningOutlined />,
                            okText: "Xác nhận",
                            cancelText: "Hủy",
                            onCancel: () => {
                              return;
                            },
                            onOk: () => {
                              this.props.handleConfirm({ type: item.id });
                            },
                            footer: (_, { OkBtn, CancelBtn }) => (
                              <>
                                <CancelBtn />
                                <OkBtn />
                              </>
                            ),
                          });
                        } else {
                          this.props.handleConfirm({ type: item.id });
                        }
                      }}
                    >
                      {item.label?.toUpperCase()}
                    </Button>
                    {index !== this.props.buttonConfig.length - 1 ? (
                      <Divider
                        key={index}
                        type="vertical"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(153, 153, 153, 0.1) 0px, rgb(179 176 176) 40%, rgb(169 167 167) 60%, rgba(153, 153, 153, 0.1) 100%)",
                          height: "24px",
                          width: "1.8px",
                          paddingRight: "1px",
                          borderRadius: 0,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                );
              } else return <></>;
            })}
          </Space>
        </div>
      </>
    );
  }
}

export default ToolBar;
