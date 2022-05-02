import React from "react";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from "recharts";

import { useState,useEffect } from "react";
import { getPerf } from "../utils/Tools";
import PropTypes from 'prop-types' ;

/**
 * Genere le graphique Radar des performances
 * @param {Number} id
 * @returns {Element}
 */
export default function RadarActivity({id}) {

  const[data,setData] = useState([{name:'', value:0}])
  console.log("salut");
  useEffect(() => {
    async function getRadar(){

      const response = await getPerf(id)

      const newData = []

      if (!response) {
        return "erreur"
      }

      response.data.forEach(x => {
          newData.push(
              {
                name: response.kind[x.kind],
                value: x.value
              }
          )
      })

      setData(newData)

    }
    
    getRadar();

  },[id])

  
    return (

      <RadarChart cy="50%" cx="50%"  width={260} height={260} data={data} outerRadius={70}  >

        <PolarGrid />

        <PolarAngleAxis dataKey="name" stroke="white" tickLine={false} y="120"/>

        <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.8} />

      </RadarChart>

    );

}

RadarActivity.propTypes = {
  id : PropTypes.number.isRequired,
}


