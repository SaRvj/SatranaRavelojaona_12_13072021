import "./Charts.css"
import React from "react"
import PropTypes from "prop-types"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts"

/**
 * Component linechart used in the dashboard to display the average-sessions metrics
 *
 * @param {Array.<Object>} props
 * @returns {JSX} ChartLine component
 *
 */

const ChartLine = (props) => {
  const CustomXAxisTick = (props) => {
    const { x, y, payload } = props
    const weekDays = ["L", "M", "M", "J", "V", "S", "D"]

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          dy={15}
          fill="white"
          textAnchor="end"
          opacity={0.6}
          fontSize="12"
        >
          {weekDays[payload.value - 1]}
        </text>
      </g>
    )
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="ChartLineToolTip">
          <span>{props.data[label - 1].sessionLength + " min"}</span>
        </div>
      )
    }

    return null
  }

  const CustomCursor = (props) => {
    const { points, width, height } = props
    const { x, y } = points[0]
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={x}
        y={y - 5}
        width={width}
        height={height + 50}
      />
    )
  }

  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsiveLineChart"
    >
      <LineChart data={props.data}>
        <text x="20" y="30" fontSize="14" fill="white" opacity={0.5}>
          Durée moyenne des
        </text>
        <text x="20" y="55" fontSize="14" fill="white" opacity={0.5}>
          sessions
        </text>
        <XAxis
          minTickGap={10}
          axisLine={false}
          tickLine={false}
          tick={CustomXAxisTick}
          dataKey="day"
          padding={{ right: 10, left: 10 }}
        />
        <YAxis
          dataKey="sessionLength"
          domain={[0, "dataMax + 60"]}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
          strokeWidth={2}
          opacity="0.6"
          xAxis={100}
          activeDot={{
            stroke: "rgba(255,255,255, 0.3)",
            strokeWidth: 10,
            r: 5,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

ChartLine.propTypes = { data: PropTypes.array.isRequired }

export default ChartLine
