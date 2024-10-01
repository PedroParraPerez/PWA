import { Button } from "antd";

interface Props {
  label: string;
  type?: "link" | "text" | "primary" | "default" | "dashed";
}

const ActionButton = (props: Props) => {
  const { label, type = "primary" } = props;
  return <Button type={type}>{label}</Button>;
};
export default ActionButton;
