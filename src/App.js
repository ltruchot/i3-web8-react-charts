import React, { useState } from 'react';
import Graphique from './Graphique';

function App() {
  // states
  const [data, setData] = useState([90, 78, 93, 78, 8]);

  // methods
  const handleChange = (val, idx) => {
    const newData = [...data];
    newData[idx] = +val;
    setData(newData);
  };

  // jsx
  return (
    <>
      {data.map((v, i) => (
        <div>
          <span>HTML skills:</span>
          <input type="range" defaultValue={v} onChange={(e) => handleChange(e.target.value, i)} />
          <span>{`${v}/100`}</span>
        </div>
      ))}
      <Graphique data={data} />
    </>
  );
}

export default App;
