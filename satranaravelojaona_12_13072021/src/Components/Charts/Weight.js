import "./Charts.css"
import React from "react"
import PropTypes from "prop-types"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts"

/**
 * Component barChart used in the dashboard to display the activity metrics
 *
 * @param {Array.<Object>} props
 * @returns {JSX} Weight component
 *
 */

const Weight = (props) => {
  console.log(props)

  const CustomXAxisTick = (props) => {
    const { x, y, payload } = props

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={3} dy={15} textAnchor="end" opacity="0.4" fontWeight={600}>
          {payload.value + 1}
        </text>
      </g>
    )
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="WeightToolTip">
          <span>{props.data[label].kilogram + "kg"}</span>
          <span>{props.data[label].calories + "Kcal"}</span>
        </div>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer height={270} className="ResponsiveWeight">
      <BarChart data={props.data} margin={{ top: 20, left: 30, bottom: 10 }}>
        <text x="20" y="23" dominantBaseline="hanging" fontSize="16">
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis tickLine={false} tick={CustomXAxisTick} />
        <YAxis
          orientation="right"
          tick={{ fontSize: 14, fill: "#74798c" }}
          tickLine={false}
          axisLine={false}
          dataKey="kilogram"
          yAxisId="right"
          domain={["dataMin-2", "dataMax+7"]}
        />
        <YAxis hide="true" dataKey="calories" />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconType="circle"
          verticalAlign="top"
          align="right"
          iconSize={10}
          height={50}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={10}
          radius={[10, 10, 0, 0]}
          minPointSize={86}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

Weight.propTypes = { data: PropTypes.array.isRequired }

export default Weight
