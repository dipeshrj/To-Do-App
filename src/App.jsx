import { useEffect, useRef, useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [works, setWorks] = useState([]);
  const nameRef = useRef();

  const addWork = () => {
    setWorks([
      ...works,
      {
        index: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        text: nameRef.current.value,
        status: false,
      },
    ]);
    nameRef.current.value = "";
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

  useEffect(() => {
    setWorks([...JSON.parse(localStorage.getItem("worksKey"))]);
  }, []);

  useEffect(() => {
    if (works.length !== 0)
      localStorage.setItem("worksKey", JSON.stringify(works));
  }, [works]);

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                }}
              >
                <input
                  type="checkbox"
                  onClick={() => {
                    item.status = !item.status;
                    setWorks([...works]);
                  }}
                />
                {item.status === true ? (
                  <p
                    style={{
                      textDecoration: "line-through",
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.text}
                  </p>
                ) : (
                  <p style={{ textTransform: "capitalize" }}>{item.text}</p>
                )}
              </div>

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
  );
}

export default App;
