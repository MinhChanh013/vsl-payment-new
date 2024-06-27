import { DatePicker } from "antd";
import { FORMAT_DATE_TIME } from "../../utils/constants.utils";
import dayjs from "dayjs";



export function renderCellEditDatePicker({ row, key, onRowChange }) {
  return (
    <DatePicker
      style={{
        width: "100%",
        height: "100%",
      }}
      showTime={{
        format: "HH:mm:ss",
      }}
      format={FORMAT_DATE_TIME}
      value={dayjs(row[key])}
      onChange={(date, dateString) => {
        onRowChange({ ...row, [key]: dateString, isEdit: true }, true);
      }}
      autoFocus
    />
  );
}
