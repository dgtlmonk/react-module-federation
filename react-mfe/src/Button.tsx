import useCount from "./store";

export const Button: React.FC<{ label: string }> = ({ label }) => {
  const [state, setState] = useCount();
  return (
    <button
      style={{ padding: "1rem", backgroundColor: "orange" }}
      onClick={() => setState(state + 1)}
    >
      {label} {state}
    </button>
  );
};

export default Button;
