import { useRef, useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";

function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  const [works, setWorks] = useState([]);
  const nameRef = useRef();

  const addWork = () => {
    setWorks([...works, nameRef.current.value]);
    nameRef.current.value = "";
    // setWorks(text);
  };

  return (
    <div className="app">
      <h3>ToDo App</h3>
      <div className="todoapp">
        <div className="input">
          {/* <TextField
            id="outlined-basic"
            label="Add Work"
            variant="outlined"
            size="small"
          />
          <Button variant="contained">Add</Button> */}
          <input
            type="text"
            id="input-text"
            placeholder="Add work"
            size={35}
            ref={nameRef}
          />
          <button className="button" onClick={() => addWork()}>
            ADD
          </button>
        </div>
        {works.map((item) => {
          return (
            <ul key={item}>
              <input type="checkbox" />
              <p>{item}</p>
              {/* <input type="checkbox" />
          <li>Task 2</li>
          <input type="checkbox" />
          <li>Task 3</li> */}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
