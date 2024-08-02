import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [props, setProps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProps(data);
        // console.log(data);
      });
  },[]);
  let fetchData = () => {
    console.log(props);
  };
  // console.log(props);
  return (
    <div className="App">
      <div>{props.length > 0 && <h1>{props[0].name}</h1>}</div>
      <div>
        <button onClick={fetchData}>Fetch your data</button>
      </div>
    </div>
  );
}

export default App;
