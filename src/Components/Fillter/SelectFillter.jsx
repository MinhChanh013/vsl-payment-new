import * as React from "react";
import { Select, Form } from "antd";
import { DownOutlined } from "@ant-design/icons";
const SelectFillter = ({ name = "", initialValues = "", options = [] }) => {
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
  const onChange = (value) => {
    console.log(value);
    // formInstance.setFieldValue(name, key ? key : "");
    // setCurrentItem(items()[key].label);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const formInstance = Form.useFormInstance();
  return (
    <Select
      showSearch
      placeholder="lựa chọn"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={filterOption}
      options={options}
    />
  );
};

export default SelectFillter;
