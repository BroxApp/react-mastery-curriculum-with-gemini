
import useToggle from "./components/useToggle"

export default function App() {
  const {state, toggle, setTrue, setFalse} = useToggle();
  return (
    <div>
      <h1>{state?"ON":"OFF"}</h1>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set True</button>
      <button onClick={setFalse}>Set False</button>
    </div>
  );
}