import * as React from "react";
import { Form, Dropdown, Flex, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
const DropdownFillter = ({ name = "", initialValues = "", options = [] }) => {
  const items = () => {
    const result = [];
    options.map((item) => {
      result.push({
        label: item.label,
        key: item.value == "" ? 0 : item.value,
      });
    });
    return result;
  };
  const [currentItem, setCurrentItem] = React.useState(items()[0].label);
  const onClick = ({ key }) => {
    formInstance.setFieldValue(name, key ? key : "");
    setCurrentItem(items()[key].label);
  };

  const formInstance = Form.useFormInstance();
  return (
    <Dropdown
      name={name}
      menu={{ items: items(), onClick }}
      placement="bottomRight"
      trigger={"click"}
    >
      <Button style={{ width: "100%" }}>
        <Flex justify="space-between">
          {currentItem}
          <DownOutlined />
        </Flex>
      </Button>
    </Dropdown>
  );
};

export default DropdownFillter;
