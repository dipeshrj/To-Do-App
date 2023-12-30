import { useRef, useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";

function App() {
  const [works, setWorks] = useState([]);
  const [id, setId] = useState(-1);
  const nameRef = useRef();

  const addWork = () => {
    setWorks([
      ...works,
      { index: id + 1, text: nameRef.current.value, status: false },
    ]);
    nameRef.current.value = "";
    setId(id + 1);
  };

  const deleteWork = (index) => {
    for (let i = 0; i < works.length; i++) {
      if (works[i].index === index) {
        works.splice(i, 1);
      }
    }
    setWorks([...works]);
  };

  console.log(works);
  return (
    <div className="app">
      <h3>ToDo App</h3>
      <div className="todoapp">
        <div className="input">
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
            <ul key={item.index}>
              <input
                type="checkbox"
                onClick={() => {
                  item.status = !item.status;
                  setWorks([...works]);
                }}
              />
              {item.status === true ? (
                <p style={{ textDecoration: "line-through" }}>{item.text}</p>
              ) : (
                <p>{item.text}</p>
              )}
              <MdDelete
                onClick={() => deleteWork(item.index)}
                size={20}
                color="red"
                style={{
                  marginRight: 0,
                  paddingRight: 0,
                }}
              />
            </ul>
          );
        })}
      </div>
    </div>
    // onClick={deleteWork()}
  );
}

export default App;
