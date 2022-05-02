import { useState,useEffect } from "react";
import { Cell, Pie, PieChart, Sector } from "recharts";
import { findID } from "../tools/Tools";
import PropTypes from 'prop-types' ;

/**
 * Genere le graphique du Score 
 * @param {Object} props 
 * @param {Number} props.id 
 * @returns {Element} 
 */
export default function Score(props){

  const[user, setUser] = useState()

  useEffect(() => {
    async function getScore(){
      const response = await findID(props.id)
      const data = []

            data.push(
                {
                    value: (response.todayScore && response.todayScore) * 100 || (response.score && response.score) * 100,
                    hidden: false
                },
                {
                    value: 100 - ((response.todayScore && response.todayScore * 100) || (response.score && response.score) * 100),
                    hidden: true
                }
            )
            setUser(data)
    }
    getScore();


  },[])

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  
    return (
      <g>
        <text x={cx} y={cy-15} dy={8} textAnchor="middle" fill="black" fontWeight={700} fontSize={24}>
          {payload.value + "%"}
        </text>

        <text x={cx} y={cy+15} dy={8} textAnchor="middle" fill="grey" fontSize={16}>
          {"de votre objectif"}
        </text>

        <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      </g>
    );
  };

  const COLORS = ["#FF0101B2", "#FBFBFB"];
    
    return (

      <PieChart width={260} height={260}>

        <Pie data={user} dataKey="value" cx="50%" cy="50%" outerRadius={70} fill="#FFFFFF"/>

        <Pie data={user} dataKey="value" activeIndex={0} activeShape={renderActiveShape} cx="50%" cy="50%" startAngle={-270} innerRadius={70} outerRadius={80} fill="white"  >

          {
            user && user.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} display={(user.hidden === true) ? "none" : ""} />)
          }

        </Pie>

      </PieChart>

    );
} 

Score.propTypes = {
  id : PropTypes.number.isRequired,
}