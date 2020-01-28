import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

function Graphique({ data }) {
  const graphRef = useRef(null);
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = graphRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'],
        datasets: [{
          label: 'Mes compétences',
          data,
          backgroundColor: ['red', 'green', 'blue', 'violet', 'pink'],
        }],
      },
    });
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = data;
      chartRef.current.update();
    }
  }, [data]);

  return (
    <canvas
      style={{ maxWidth: '500px', maxHeight: '500px' }}
      height="400"
      width="400"
      ref={graphRef}
    />
  );
}

export default Graphique;
