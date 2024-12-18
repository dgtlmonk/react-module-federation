import "./App.css";

import Button from "remoteApp/Button";
import useCount from "remoteApp/store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <h1>Shell Application</h1>
      <Button label="Remote Button Counter" />
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
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
