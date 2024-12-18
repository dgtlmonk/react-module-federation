import { Button } from "./Button";
import "./App.css";
import useCount from "./store";

function App() {
  const [count, setCount] = useCount();
  return (
    <>
      <h1>Remote App</h1>
      <Button label="Counter Button" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
