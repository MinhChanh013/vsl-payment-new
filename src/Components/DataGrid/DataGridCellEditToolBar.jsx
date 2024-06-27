import ToolBar from "../ToolBar";

export function renderCellEditToolBar({
  row,
  key,
  options,
  onRowChange,
  handleConfirm,
  buttonConfig = [],
}) {
  return (
    <ToolBar
      style={{ padding: "0px !important" }}
      buttonConfig={buttonConfig}
      handleConfirm={(props) => handleConfirm({ ...props, value: row })}
    />
  );
}
