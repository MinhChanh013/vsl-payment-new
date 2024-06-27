/* eslint-disable react-hooks/exhaustive-deps */
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Col,
  Divider,
  Empty,
  Flex,
  Input,
  Pagination,
  Row,
  Space,
  Typography,
} from "antd";
import { groupBy as rowGrouper, set } from "lodash";
import ReactDataGrid, {
  SelectColumn,
  TreeDataGrid,
  textEditor,
} from "react-data-grid";
import { v4 as uuidv4 } from "uuid";
import { renderCellEditDatePicker } from "./DataGridCellEditDatePicker";
import { renderCellEditPassword } from "./DataGridCellEditPassword";
import { renderCellEditSelect } from "./DataGridCellEditSelect";
import { renderCellEditToolBar } from "./DataGridCellEditToolBar";
import { renderCellTextInput } from "./DataGridNewInput";

export const clickSelectRowType = {
  none: "none",
  cell: "cell",
};

export const selectionTypes = {
  multi: "multi",
  single: "single",
  none: "none",
};

export const columnTypes = {
  DatePicker: "DatePicker",
  TextEditor: "TextEditor",
  Checkbox: "Checkbox",
  Select: "Select",
  ToolBar: "ToolBar",
  Password: "Password",
  TextInput: "TextInput",
  Switch: "Switch",
};

export const paginationTypes = {
  none: "none",
  scroll: "scroll",
  pagination: "pagination",
};

const getEditCell = (key, cellType, options = [], baseColumn) => {
  switch (cellType) {
    case columnTypes.DatePicker:
      return ({ row, onRowChange }) =>
        renderCellEditDatePicker({
          key,
          row,
          onRowChange,
          baseColumn,
        });
    case columnTypes.Select:
      return ({ row, onRowChange }) =>
        renderCellEditSelect({
          key,
          row,
          onRowChange,
          options,
          baseColumn,
        });

    case columnTypes.ToolBar:
      return ({ row, onRowChange }) =>
        renderCellEditToolBar({
          key,
          row,
          onRowChange,
          options,
        });

    case columnTypes.Password:
      return ({ row, onRowChange }) =>
        renderCellEditPassword({
          key,
          row,
          onRowChange,
        });

    case columnTypes.TextInput:
      return ({ row, onRowChange }) =>
        renderCellTextInput({
          key,
          row,
          onRowChange,
          baseColumn,
        });

    default:
      return ({ row, onRowChange, column, onClose }) => {
        if (!row.isNew) {
          row.isEdit = true;
        }
        return textEditor({
          column,
          row,
          onRowChange,
          onClose,
        });
      };
  }
};

const handleRenderColumn = ({
  type = columnTypes.TextEditor,
  editable = true,
  visible = true,
  render,
  key,
  selection,
  index,
  baseColumn,
  ...props
}) => {
  const column = {
    ...props,
    key,
    renderEditCell: editable
      ? getEditCell(key, type, props?.options ?? [], baseColumn)
      : null,
  };

  // Hide column when visible = true
  if (!visible) return null;

  // custom renderCell
  if (typeof render === "function") column["renderCell"] = render;

  // Hide header of column SelectColumn
  if (selection === selectionTypes.single && index === 0)
    column["renderHeaderCell"] = null;

  // Hide all SelectColumn
  if (selection === selectionTypes.none && index === 0) {
    return null;
  }

  return column;
};

function EmptyRowsRenderer() {
  return (
    <div style={{ textAlign: "center", gridColumn: "1/-1", padding: "10px" }}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Không có dữ liệu"
      />
    </div>
  );
}

export const dataGridType = {
  datagrid: "datagrid",
  treedatagrid: "treedatagrid",
};

const pickComponent = (type) =>
  ({
    [dataGridType.datagrid]: ReactDataGrid,
    [dataGridType.treedatagrid]: TreeDataGrid,
  }[type]);

const DataGrid = forwardRef(
  (
    {
      direction = "ltr",
      style,
      columns = [],
      className,
      columnKeySelected = "STT",
      selection = selectionTypes.multi,
      clickSelectRow = clickSelectRowType.none,
      selectedOption = [],
      expandedGroupIdsProps = [],
      rows = [],
      setRows,
      onFocus,
      limit = 20,
      maxHeight = 600,
      pagination = paginationTypes.scroll,
      isSearch = true,
      toolbar = null,
      isFill = true,
      typeDataGrid = dataGridType.datagrid,
      handleGetSelect,
      onCellDoubleClick = () => {},
      filterColumn,
    },
    ref
  ) => {
    const [sortColumns, setSortColumns] = useState([]);
    const [selectedRows, setSelectedRows] = useState(() => new Set());
    const [currentRows, setCurrenRows] = useState([]);
    const [filterData, setFilterData] = useState("");
    const [currentPage, setCurrenPage] = useState(1);
    const reactDataGridRef = useRef();
    const [isSearching, setIsSearching] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [expandedGroupIds, setExpandedGroupIds] = useState(() => {
      new Set([]);
    });

    useEffect(() => {
      if (expandedGroupIdsProps.length > 0) {
        setExpandedGroupIds(new Set(expandedGroupIdsProps));
      }
    }, [expandedGroupIdsProps]);

    const ComponentDataGrid = useMemo(() => {
      return pickComponent(typeDataGrid);
    }, [typeDataGrid]);

    useEffect(() => {
      handleRenderRows(
        currentPage,
        limit,
        pagination,
        !isSearching ? rows : dataSearch
      );
    }, [currentPage, limit, pagination, rows, dataSearch, isSearching]);

    useEffect(() => {
      const listSelectdRows = [...selectedRows];
      if (listSelectdRows.length === 0 && isSearching) {
        const missRow = dataSearch.filter((rowSearch) => {
          return !rows.some((rowItem) => rowItem.rowguid === rowSearch.rowguid);
        });
        const newDataSearch = dataSearch.filter((rowSearch) => {
          return !missRow.some(
            (rowMiss) => rowMiss.rowguid === rowSearch.rowguid
          );
        });
        setDataSearch(newDataSearch);
      }
    }, [selectedRows]);

    const handleRenderRows = (currentPage, limit, pagination, rows) => {
      const start_index = (currentPage - 1) * limit;
      const dataRowCurrent = rows.slice(start_index, start_index + limit);
      switch (pagination) {
        case "none":
          setCurrenRows(rows);
          break;
        case "scroll":
          let dataRowCurrentScroll;
          if (start_index === 0) {
            dataRowCurrentScroll = rows.slice(
              rateScreen * start_index,
              rateScreen * (start_index + limit)
            );
          } else {
            dataRowCurrentScroll = rows.slice(
              rateScreen * start_index,
              rateScreen * start_index + limit
            );
          }
          if (
            currentRows.length === selectedRows.size &&
            currentRows.length !== 0 &&
            selectedRows.size !== 0
          ) {
            const idArrRowCurrent = dataRowCurrentScroll.map(
              (item) => item[columnKeySelected]
            );
            setSelectedRows(
              (prevSelectedRows) =>
                new Set([...prevSelectedRows, ...idArrRowCurrent])
            );
          }
          setCurrenRows((prevCurrenRows) => {
            return [...prevCurrenRows, ...dataRowCurrentScroll];
          });
          break;
        case "pagination":
          setCurrenRows(dataRowCurrent);
          break;
        default:
          break;
      }
    };

    useEffect(() => {
      rows.map((row, index) => (row["STT"] = index + 1));
      if (pagination === "scroll") {
        reactDataGridRef.current?.element.addEventListener(
          "scroll",
          handleScroll
        );
      }
      return () => {
        reactDataGridRef.current?.element.removeEventListener(
          "scroll",
          handleScroll
        );
      };
    }, [rows, dataSearch]);

    const rateScreen = useMemo(() => {
      return Math.ceil(maxHeight / (limit * 30));
    }, []);

    const summaryRows = useMemo(() => {
      // let cntrNoCount = new Set(rows.map((obj) => obj["CntrNo"]));
      return [
        {
          id: "total_0",
          totalCount: rows.length,
          totalSearch: dataSearch.length,
          // cntrNoCount: [...cntrNoCount].length,
        },
      ];
    }, [rows, dataSearch]);

    const columnsCombined = useMemo(() => {
      return [
        {
          ...SelectColumn,
          editable: false,
        },
        ...columns,
      ]
        .map((column, index) => {
          return handleRenderColumn({
            ...column,
            editable:
              column.key === "STT" || column.type === "Checkbox"
                ? false
                : column.editable,
            baseColumn: column,
            selection,
            index,
          });
        })
        .filter((column) => column);
    }, [columns, selection]);

    const rowHeight = useMemo(() => {
      if (columns.some((item) => item.type === "ToolBar")) {
        return 40;
      } else return 30;
    }, [columns]);

    const handleFill = useCallback(({ columnKey, sourceRow, targetRow }) => {
      const columnFill = columns.find((column) => column.key === columnKey);
      if (!isFill || columnFill?.isFill === false) {
        return { ...targetRow };
      } else return { ...targetRow, [columnKey]: sourceRow[columnKey] };
    }, []);

    const handlePaste = useCallback(
      ({ sourceColumnKey, sourceRow, targetColumnKey, targetRow }) => {
        return { ...targetRow, [targetColumnKey]: sourceRow[sourceColumnKey] };
      },
      []
    );

    const handleCopy = useCallback(({ sourceRow, sourceColumnKey }) => {
      if (window.isSecureContext) {
        navigator.clipboard.writeText(sourceRow[sourceColumnKey]);
      }
    }, []);

    const handleResetSelected = () => {
      setSelectedRows(new Set());
    };

    useImperativeHandle(
      ref,
      () => {
        return {
          getSelectedRows: () => {
            return selectedRows;
          },
          setSelectedRows: () => {
            setSelectedRows(new Set());
          },
          getRows: () => {
            return rows;
          },
          insertRows: insertRows,
          handleResetSelected: handleResetSelected,
          handleValidate: handleValidate,
        };
      },
      [selectedRows, rows, dataSearch]
    );

    const handleScroll = () => {
      const dataGridScrollTop = reactDataGridRef.current.element.scrollTop;
      const dataGridScrollHeight =
        reactDataGridRef.current.element.scrollHeight;
      const dataGridClientHeight =
        reactDataGridRef.current.element.clientHeight;
      if (
        dataGridScrollTop + 20 >=
        dataGridScrollHeight - dataGridClientHeight
      ) {
        setCurrenPage((prevPage) => {
          return prevPage + 1;
        });
      }
    };

    function findObjectsWithDiffValues(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        const object1 = arr1[i];
        const matchingObject = arr2.find(
          (object2) => object1.rowguid === object2.rowguid
        );

        if (matchingObject) {
          const isDifferent = Object.keys(object1)
            .filter((key) => key !== "rowguid")
            .some((key) => object1[key] !== matchingObject[key]);

          if (isDifferent) {
            return { ...matchingObject };
          }
        }
      }
      return {};
    }

    const handleRowsChange = (newRows) => {
      if (pagination === paginationTypes.pagination) {
        if (isSearching) {
          const rowDiff = findObjectsWithDiffValues(currentRows, newRows);
          if (rowDiff) {
            // const pageDiff = Math.ceil(rows.findIndex((item) => item.rowguid === rowDiff[columnKeySelected]) / limit)
            const indexRowDiff = rows.findIndex(
              (item) => item.rowguid === rowDiff[columnKeySelected]
            );
            setDataSearch([
              ...dataSearch.slice(0, (currentPage - 1) * limit),
              ...newRows,
              ...dataSearch.slice(currentPage * limit),
            ]);
            const newRowsOrigin = rows.map((row) => {
              if (row[columnKeySelected] === rowDiff[columnKeySelected])
                return { ...rowDiff, STT: indexRowDiff + 1 };
              else return { ...row };
            });
            setRows(newRowsOrigin);
          }
        } else {
          setRows([
            ...rows.slice(0, (currentPage - 1) * limit),
            ...newRows,
            ...rows.slice(currentPage * limit),
          ]);
        }
      } else {
        setRows(newRows);
      }
    };

    const insertRows = (
      rowNumb = 1,
      insertRowIdx = 0,
      keyInsert = "rowguid",
      rowCustom = {}
    ) => {
      let newRow = {};
      columns.map((column) => {
        let valueColumn;
        if (column.type === columnTypes.Checkbox) {
          valueColumn = 0;
        } else if (column.type === columnTypes.DatePicker) {
          valueColumn = undefined;
        } else valueColumn = "";
        return (newRow[column.key] = valueColumn);
      });
      let newRows = [];
      Array(rowNumb)
        .fill(0)
        .map((p) => {
          const newRowValue = {
            ...newRow,
            ...rowCustom,
            isNew: true,
          };
          newRowValue[keyInsert] = uuidv4();
          return newRows.push(newRowValue);
        });
      const newRowsInsert = [
        ...rows.slice(0, insertRowIdx),
        ...newRows,
        ...rows.slice(insertRowIdx),
      ];
      setRows(newRowsInsert);
      if (isSearching) {
        setDataSearch([
          ...dataSearch.slice(0, insertRowIdx),
          ...newRows,
          ...dataSearch.slice(insertRowIdx),
        ]);
      }
    };

    const handleSelected = (idRowSelected) => {
      if (selection === selectionTypes.multi) {
        setSelectedRows(idRowSelected);
        handleGetSelect && handleGetSelect(idRowSelected);
      }
      if (
        selection === selectionTypes.single ||
        clickSelectRow === clickSelectRowType.cell
      ) {
        let value = idRowSelected;
        if (typeof value === "object") {
          const rowSelectedArr = [...value];
          value = rowSelectedArr[rowSelectedArr.length - 1];
        }
        setSelectedRows(() => new Set([value]));
        handleGetSelect && handleGetSelect(value);
      }
    };

    const handleValidate = (keyId = "rowguid") => {
      const listRowsChange = rows.filter((row) => row?.isEdit || row?.isNew);
      const requiredFields = columns.filter((field) => field.required);
      const listValidate = listRowsChange.map((item) => {
        const errors = [];
        requiredFields.forEach((field) => {
          if (
            (field.required && !item.hasOwnProperty(field.key)) ||
            !item[field.key]
          ) {
            errors.push(field.key);
          }
        });
        return { [keyId]: item[keyId], isError: errors.length > 0, errors };
      });

      setRows(
        rows.map((row) => {
          const indexValidate = listValidate.findIndex(
            (itemValidate) => itemValidate[keyId] === row[keyId]
          );
          if (indexValidate !== -1) {
            return {
              ...row,
              isError: listValidate[indexValidate].isError,
              errors: listValidate[indexValidate].errors,
            };
          } else
            return {
              ...row,
            };
        })
      );
      return {
        isCheck: !listValidate.some((item) => item.isError),
        validate: listValidate,
      };
    };

    const handleSearchTable = (value) => {
      setFilterData(value);
      if (value === "") {
        setIsSearching(false);
        handleRenderRows(1, limit, pagination, rows);
      } else {
        setIsSearching(true);
        const newRows = handleFindSearch(value);
        handleRenderRows(1, limit, pagination, newRows);
      }
      setCurrenPage(1);
    };

    const handleFindSearch = (value) => {
      const filterColumnSearch = columns.map((item) => item.key);
      const newRows = rows.filter((row) => {
        return filterColumnSearch.some((column) => {
          return row[column]?.toString().toUpperCase().includes(value);
        });
      });
      setDataSearch(newRows);
      return newRows;
    };

    return (
      <>
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {isSearch ? (
              <Input
                onChange={(e) => {
                  handleSearchTable(e.target.value.toUpperCase());
                }}
                value={filterData}
                placeholder="Tìm theo chức năng"
                style={{
                  width: "280px",
                  margin: "12px 0",
                  height: "fit-content",
                }}
              />
            ) : (
              ""
            )}
            {toolbar}
          </Col>

          <Col span={24} style={{ height: "100%" }}>
            <ComponentDataGrid
              ref={reactDataGridRef}
              className={`rdg-light rdg-custom ${className} ${
                pagination === "scroll" ? "fill-grid" : ""
              }`}
              style={{
                height: "calc(100% - 40px)",
                maxHeight: maxHeight,
                ...style,
              }}
              renderers={{ noRowsFallback: <EmptyRowsRenderer /> }}
              defaultColumnOptions={{ sortable: true, resizable: true }}
              sortColumns={sortColumns}
              onSortColumnsChange={setSortColumns}
              rows={currentRows}
              columns={columnsCombined}
              selectedRows={selectedRows}
              groupBy={selectedOption}
              rowGrouper={rowGrouper}
              expandedGroupIds={expandedGroupIds}
              onExpandedGroupIdsChange={setExpandedGroupIds}
              rowHeight={rowHeight}
              headerRowHeight={38}
              direction={direction}
              rowKeyGetter={(row) => row[columnKeySelected]}
              onRowsChange={handleRowsChange}
              onSelectedCellChange={
                typeof onFocus === "function" ? onFocus : () => {}
              }
              enableVirtualization
              onFill={
                typeDataGrid === dataGridType.treedatagrid ? null : handleFill
              }
              onCopy={handleCopy}
              onPaste={handlePaste}
              onSelectedRowsChange={(row) => {
                handleSelected(row);
              }}
              onCellDoubleClick={(args, event) => {
                onCellDoubleClick(args);
              }}
              onCellClick={(args, event) => {
                if (args.column.key === "title") {
                  event.preventGridDefault();
                  args.selectCell(true);
                }
                if (clickSelectRow === clickSelectRowType.cell) {
                  handleSelected(args.row[columnKeySelected]);
                }
              }}
            />
            <Flex
              style={{ boxSizing: "border-box", height: "40px" }}
              align="center"
              justify="space-between"
            >
              <Space style={{ padding: "10px 0px" }}>
                <Typography
                  level={5}
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    color: "#6a6a6a",
                  }}
                >
                  Số{" "}
                  {isSearching
                    ? `dòng tìm kiếm: ${dataSearch.length} / `
                    : "dòng: "}{" "}
                  {summaryRows[0].totalCount}
                </Typography>
                {/* {rows.some((obj) => "CntrNo" in obj) ? (
                  <>
                    <Divider
                      type="vertical"
                      style={{ borderColor: "#818181" }}
                    />
                    <Typography
                      level={5}
                      style={{
                        textAlign: "center",
                        fontWeight: "600",
                      }}
                    >
                      Số công: {summaryRows[0].cntrNoCount}
                    </Typography>
                  </>
                ) : (
                  ""
                )} */}
              </Space>
              {pagination === "pagination" && rows && rows.length > 0 ? (
                <Pagination
                  style={{
                    marginTop: 10,
                    marginRight: 10,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  pageSize={limit}
                  showSizeChanger={false}
                  onChange={(pageChange) => setCurrenPage(pageChange)}
                  defaultCurrent={currentPage}
                  total={isSearching ? dataSearch.length : rows.length}
                />
              ) : (
                ""
              )}
            </Flex>
          </Col>
        </Row>
      </>
    );
  }
);

export default DataGrid;
