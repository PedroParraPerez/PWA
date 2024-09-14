interface Props {
  label: string;
  type?: "button" | "submit" | "reset";
}

const ActionButton = (props: Props) => {
  const { label, type } = props;
  return (
    <button type={type} className="btn">
      {label}
    </button>
  );
};
export default ActionButton;
