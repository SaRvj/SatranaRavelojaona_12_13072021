import React from "react";
import { useState,useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";
import { getActivity } from "../tools/Tools";
import PropTypes from 'prop-types' ;

/**
 * Genere le graphique d'activité quotidienne
 * @param {Object} props 
 * @param {Number} props.id 
 * @returns {Element}
 */
export default function WeightChart(props) {

  const [data, setData] = useState()

    useEffect(() => {

      async function getSession() {
       const response = await getActivity(props.id)
       setData(response.sessions)
      }

      getSession()

    }, []) 

    if (!data) return (
      <div>
          <h1>ERREUR</h1>
      </div>
  )
 
  function CustomTooltip({ active, payload}) {
        
    if (active && payload[0].value !== null && payload[1].value !== null) {

      return (
           <div className="tooltip-weight">
              <h4>{ payload[0].value }kg</h4>
              <h4>{ payload[1].value }Kcal</h4>
           </div>
        )
    }
    return null
  }

  const renderLegend = (props) => {
    const { payload } = props;
  
    return (
      <div className="legend-weight">
      <h3> Activité quotidienne</h3>
      <ul>
        {
          payload.map((entry, index) => (
            <li className="legend-weight-list" key={`item-${index}`} style={{color: entry.color}} >{entry.value}</li>
          ))
        }
      </ul>
      </div>
    );
  }

  return (
    
    <BarChart width={840} height={320} data={data} barGap={10} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

      <CartesianGrid strokeDasharray="3 3" vertical={false}/>

      <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: "20px", top: "10px",right: "43px" }} content={renderLegend}  />

  
      <XAxis tickLine={false} > </XAxis>  

      
      <YAxis orientation='right' yAxisId="right" wrapperStyle={{ width: "220px" }} dataKey="kilogram" domain={['dataMin - 10', 'dataMax + 5']} axisLine={false}/> 
      <YAxis orientation='left' yAxisId="left" wrapperStyle={{ width: "220px" }}  domain={[0, "dataMax + 10 "]} hide="true"/> 

      <Tooltip  content={<CustomTooltip />} />

      <Bar barSize={10} yAxisId="right" dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} />
      <Bar barSize={10} yAxisId="left" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} />

    </BarChart>
  );

}

WeightChart.propTypes = {
  id : PropTypes.number.isRequired,
}