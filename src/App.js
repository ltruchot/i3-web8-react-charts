import React, { useState } from 'react';
import Graphique from './Graphique';

function App() {
  // states
  const [data, setData] = useState([90, 78, 93, 78, 8]);
  const skills = ['HTML', 'CSS', 'Python', 'JavaScript', 'React'];

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
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '500px',
        }}
        >
          <div>{`${skills[i]}:`}</div>
          <input type="range" defaultValue={v} onChange={(e) => handleChange(e.target.value, i)} />
          <div>{`${v}/100`}</div>
        </div>
      ))}
      <Graphique data={data} />
    </>
  );
}

export default App;
