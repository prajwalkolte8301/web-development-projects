import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [currentTime, updateTime] = useState(time);
  setInterval(UpdateTime, 1000);

  function UpdateTime() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
