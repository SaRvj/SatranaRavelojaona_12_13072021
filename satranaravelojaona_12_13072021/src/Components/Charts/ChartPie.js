import "./Charts.css"
import React from "react"
import PropTypes from "prop-types"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

/**
 * PieChart used in the dashboard to display the props score metric
 *
 * @param {Number} props
 * @returns {JSX} ChartPie component
 *
 */

const ChartPie = (props) => {
  let scoreData = props.data
  let emptyData = 1 - scoreData
  let pieData = [{ value: scoreData }, { value: emptyData }]

  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsivePieChart"
    >
      <PieChart>
        <circle fill="white" cy="50%" cx="50%" r="70" />
        <text x="15" y="25" fontSize={12} fontWeight={600}>
          Score
        </text>
        <text
          x="50%"
          y="48%"
          fontSize={25}
          fontWeight={600}
          textAnchor="middle"
        >
          {scoreData * 100 + "%"}
        </text>
        <text
          x="50%"
          y="56%"
          fontSize={12}
          fontWeight={600}
          opacity={0.3}
          textAnchor="middle"
        >
          de votre objectif
        </text>

        <Pie
          data={pieData}
          dataKey="value"
          fill="#FF0000"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
          stroke="none"
          cornerRadius={40}
        >
          <Cell fill="red" />
          <Cell fill="transparent" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

ChartPie.propTypes = {
  data: PropTypes.number,
}

export default ChartPie
