/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Button, Divider, Modal, Space } from "antd";
import {
  CloseOutlined,
  CloudDownloadOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  WarningOutlined,
  ExportOutlined,
} from "@ant-design/icons";
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
  exportexcel: {
    id: "export excel",
    label: "Xuất Excel",
    fontColor: "#555555",
    icon: <ExportOutlined />,
  },
  cancel: {
    id: "cancel",
    label: "Hủy gửi",
    fontColor: "#f54f40",
    icon: <CloseOutlined style={{ stroke: "#f54f40", strokeWidth: 30 }} />,
    alert: true,
    message: "Bạn có muốn hủy gửi thông điệp?",
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
  add: {
    id: "add",
    label: "Thêm dòng",
    fontColor: "#039cfd",
    icon: <PlusCircleOutlined style={{ stroke: "#039cfd", strokeWidth: 30 }} />,
    alert: false,
    message: "",
  },
};
const ToolBar = ({ buttonConfig, cardConfig, handleConfirm }) => {
  const [openModal] = useState(false);
  return (
    <>
      <div style={{ padding: "4px 4px" }}>
        <Space size={0}>
          {buttonConfig.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {index !== 0 ? (
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
                <Button
                  key={item.id}
                  type="text"
                  icon={item.icon}
                  onClick={() => {
                    if (item.alert) {
                      Modal.confirm({
                        title: "Cảnh báo!",
                        content: item.message,
                        open: { openModal },
                        icon: <WarningOutlined />,
                        okText: "Xác nhận",
                        cancelText: "Hủy",
                        onCancel: () => {
                          return;
                        },
                        onOk: () => {
                          handleConfirm({ type: item.id });
                        },
                        footer: (_, { OkBtn, CancelBtn }) => (
                          <>
                            <CancelBtn />
                            <OkBtn />
                          </>
                        ),
                      });
                    } else {
                      handleConfirm({ type: item.id });
                    }
                  }}
                  style={{
                    color: item.fontColor,
                    fontWeight:"700",
                  }}
                >
                  {item.label.toUpperCase()}
                </Button>
              </React.Fragment>
            );
          })}
        </Space>
      </div>
    </>
  );
};
export default ToolBar;
