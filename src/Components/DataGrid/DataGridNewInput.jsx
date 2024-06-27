/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "antd";
import React, { useState } from "react";

export function renderCellTextInput({ row, key, onRowChange, baseColumn }) {
  const [value, setValue] = useState(row[key]);

  const handleChangeInput = () => {
    onRowChange({ ...row, [key]: value, isEdit: true }, true)
    baseColumn.onCellChange({row, key, value})
  }
  return (
    <Input
      onChange={(event) => {
        setValue(event.target.value)
      }}
      onBlur={handleChangeInput}
      onPressEnter={handleChangeInput}
      value={value}
    />
  );
}
