import React, { useState } from "react";

function App() {
  const [item, setItem] = useState();
  const [items, AddItem] = useState([]);

  function updateItem(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    AddItem((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateItem} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
