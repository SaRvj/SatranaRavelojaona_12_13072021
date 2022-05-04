import activityData from "../Class/activity"
import averageSessions from "../Class/averageSessions"
import performance from "../Class/performance"
import mainData from "../Class/mainData"

/**
 * Clone the fetched data into classes
 * @param {JSON} result
 * @param {String} url
 *
 */

const ConvertData = (result, url) => {
  if (url.includes("activity")) {
    return new activityData(result.data.userId, result.data.sessions)
  }
  if (url.includes("average-sessions")) {
    return new averageSessions(result.data.userId, result.data.sessions)
  }
  if (url.includes("performance")) {
    return new performance(
      result.data.userId,
      result.data.kind,
      result.data.data
    )
  }

  return new mainData(
    result.data.id,
    result.data.userInfos,
    result.data.score,
    result.data.keyData
  )
}

export default ConvertData
