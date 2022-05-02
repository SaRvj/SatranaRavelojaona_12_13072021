import Axios from "axios"

/**
 * Utilisation ou non des données mockés
 * @var {boolean} 
 */
const mockee = false
const serverMock = "http://localhost:3001/Mock/"
const server = "http://localhost:3000/user/"

/**
 * Function for User.jsx to get the id and data
 * La function est utilisé dans le Chart n*4 = Score
 * @param {number} id - The id of user.
 * @returns {Promise.<Object>}
 */
async function findID(id) {

    if (mockee) {
        const response = await fetch(`${serverMock+id}.json`) //call at 3001 when we start back first , then front 
        const data = await response.json()
        return data
    } 
    const response = await Axios.get(server+id) // host:3000 call on Backend first 
    return response.data.data
}

/**
 * La function est utilisé dans le Chart n*1 = WeightChart
 * @param {number} id - The id of user.
 * @returns {Promise.<Object>}
 */
async function getActivity(id) {

    if (mockee) {
        
        const response = await fetch(`http://localhost:3001/Mock/${id}/activity.json`)
        const data = await response.json()
        console.log("tools weightdata",data)
        return data
    } 

    const response = await Axios.get('http://localhost:3000/user/'+id+'/activity') 
    return response.data.data   
}

/**
 * La function est utilisé dans le Chart n*2 = Objectifs
 * @param {number} id - The id of user.
 * @returns {Promise.<Object>}
 */
async function getAverageSession(id) {

    if (mockee ) {
        
        const response = await fetch(`http://localhost:3001/Mock/${id}/average-sessions.json`)
        const data = await response.json()
        return data
    }   
    const response = await Axios.get('http://localhost:3000/user/'+id+'/average-sessions')  
    return response.data.data
}

/**
 * La function est utilisé dans le Chart n*3 = Radar
 * @param {number} id - The id of user.
 * @returns {Promise.<Object>}
 */
async function getPerf(id) {
    
    if (mockee) {
        
        const response = await fetch(`http://localhost:3001/Mock/${id}/performance.json`)
        const data = await response.json()
        return  data 

    }     
    const response = await Axios.get(`http://localhost:3000/user/${id}/performance`)  
    return response.data.data
}


export {
    findID,
    getAverageSession,
    getActivity,
    getPerf
}