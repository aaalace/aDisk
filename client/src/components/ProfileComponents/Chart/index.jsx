import React, { useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import { FormattedMessage } from 'react-intl'

const data = [
  { name: <FormattedMessage id='prof_empty_storage'/>, value: 300 },
  { name: 'txt', value: 300 },
  { name: 'pdf', value: 250 },
  { name: 'png', value: 150 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  let colorName = "#333"
  let colorPercent = "#999"
  if (localStorage.getItem('theme') === 'dark') {
        colorName = 'white'
        colorPercent = '#cecece'
  }

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={colorName}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 8}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={colorName}>{payload.name}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={colorPercent}>
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    </g>
  );
};

const Charts = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const colorPie = '#6366f1'
    let strokeColor = 'white'
    if (localStorage.getItem('theme') === 'dark') {
        strokeColor = '#121212'
    }

    const onPieEnter = (_, index) => {
        setActiveIndex(index)
    };

    return (
      <div>
        <PieChart width={500} height={300} style={{width: '100%'}}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            fill={colorPie}
            dataKey="value"
            onMouseEnter={onPieEnter}
            stroke={strokeColor}
          />
        </PieChart>
      </div>
    )
}

export default Charts