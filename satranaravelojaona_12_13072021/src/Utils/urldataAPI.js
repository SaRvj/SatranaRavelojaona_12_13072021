/**
 * Paths to the API
 */

const urldataAPI = {
  urlMainData(id) {
    return `http://localhost:3000/user/${id}`
  },
  urlActivity(id) {
    return `http://localhost:3000/user/${id}/activity`
  },
  urlSessions(id) {
    return `http://localhost:3000/user/${id}/average-sessions`
  },
  urlPerformance(id) {
    return `http://localhost:3000/user/${id}/performance`
  },
}

export default urldataAPI
