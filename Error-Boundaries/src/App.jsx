import { useState } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

// Custom component that throws an error
function MyComponent() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Oops! Something went wrong!");
  }

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Fallback component with a different name
function FallbackComponent({ error }) {
  return <div>Something went wrong: {error.message}</div>;
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <MyComponent /> {/* Wrap any component here */}
    </ErrorBoundary>
  );
}

export default App;
