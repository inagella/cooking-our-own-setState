import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const state = { eventCount: 0, eventChange: "" };

export default function App() {
  function handleChange(event) {
    setState({ eventChange: event.target.value });
    console.log(state.eventChange);
  }
  function handleClick() {
    setState({ eventCount: state.eventCount + 1 });
  }
  return (
    <div>
      <p>Count increased on Click: {state.eventCount}</p>
      <p>
        <button onClick={handleClick} type="submit">
          ClickMe
        </button>
      </p>
      <p>
        <label>Enter: </label>
        <input onChange={handleChange} type="text" />
      </p>
      <p>You Entered : {state.eventChange} </p>
    </div>
  );
}
function setState(newState) {
  Object.assign(state, newState);
  renderApp();
}

function renderApp() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
}

renderApp();
