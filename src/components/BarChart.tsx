import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const BarChart: React.FC = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['5', '9', '11', '13', '15', '17', '21','23','25','27','29','31','33','35','37','39','42','44','46']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      show: false, // Hide the grid
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130,120,200,150,80,70,130,120,200,150,80,120 ,70],
        type: 'bar',
        itemStyle: {
          borderRadius: 50 // Round the corners of the bars
        }
      }
    ]
  };

  return (
    <div style={{ width: '100%', height: '260px' }}>
      <ReactECharts
        option={option}
        echarts={echarts}
      />
    </div>
  );
};

export default BarChart;
