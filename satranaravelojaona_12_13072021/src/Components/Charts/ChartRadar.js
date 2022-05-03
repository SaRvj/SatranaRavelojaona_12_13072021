import "./Charts.css"
import React from "react"
import PropTypes from "prop-types"
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

/**
 * RadarChart used in the dashboard to display the performance metrics
 *
 * @param {Array.<Object>} props
 * @returns {JSX} ChartRadar component
 *
 */

const ChartRadar = (props) => {
  const CustomAngles = (props) => {
    const { x, y, cy, cx, payload } = props

    // Translated in French from the json
    let allKinds = [
      "Cardio",
      "Énergie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ]

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          y={2 + (y - cy) / 5}
          x={18 + (x - cx) / 3}
          fill="white"
          textAnchor="end"
          fontSize="9"
          fontWeight={600}
        >
          {allKinds[payload.value]}
        </text>
      </g>
    )
  }

  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsiveRadarChart"
    >
      <RadarChart
        outerRadius="55%"
        innerRadius="10%"
        data={props.data}
        margin={{ left: 20 }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis tick={CustomAngles} />
        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

ChartRadar.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ChartRadar
