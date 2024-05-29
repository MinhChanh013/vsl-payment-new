import { Col, Divider, Form, Row, Typography } from "antd";
import { Fragment, useMemo } from "react";
import CheckboxFilter from "./CheckboxFilter";
import InputFilter from "./InputFilter";
import RadioGroupFilter from "./RadioGroupFilter";
import RangePickerFilter from "./RangePickerFilter";
import TextAreaFilter from "./TextAreaFilter";
import DropdownFillter from "./DropdownFillter";
const { Text } = Typography;
const pickComponent = (type) =>
  ({
    [filterType.radio]: RadioGroupFilter,
    [filterType.input]: InputFilter,
    [filterType.rangePicker]: RangePickerFilter,
    [filterType.textarea]: TextAreaFilter,
    [filterType.checkbox]: CheckboxFilter,
    [filterType.dropdown]: DropdownFillter,
  }[type]);

export const filterType = {
  radio: "radio",
  input: "input",
  rangePicker: "rangePicker",
  textarea: "textarea",
  checkbox: "checkbox",
  dropdown: "dropdown",
};

export const Filter = (
  /** @type {{items: Array<{type: String, label: String, config: any}>, form: FormInstance<any>}} */ {
    items = [],
    form = null,
  }
) => {
  const initialValues = useMemo(() => {
    const result = items.reduce((init, { config }) => {
      init[config["name"]] = config["initialValues"];
      return init;
    }, {});

    return result;
  }, [items]);

  return (
    <Form form={form} initialValues={initialValues}>
      <Row gutter={[0, 16]} style={{ marginTop: "10px" }}>
        {items.map(({ type, label, config }, index) => {
          const Component = pickComponent(type);
          return (
            <Fragment key={`${label}-${index}`}>
              <Col span={type === "input" || type === "dropdown" ? 10 : 24}>
                <Text style={config.style || {}} strong>
                  {label}
                </Text>
              </Col>
              <Col span={type === "input" || type === "dropdown" ? 14 : 24}>
                <Form.Item style={{ marginBottom: "4px" }} name={config.name}>
                  <Component {...config} />
                </Form.Item>
              </Col>
            </Fragment>
          );
        })}
      </Row>
    </Form>
  );
};
