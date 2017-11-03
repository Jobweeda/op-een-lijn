import API from '../../api'

export const GET_PATIENT = 'GET_PATIENT'

const api = new API()

export default(patientId) => {
  return (dispatch) => {

    const backend = api.service('patients')

    backend.get(patientId)
      .then((result) => {
        debugger
        console.log(result)
        dispatch({
          type: GET_PATIENT,
          payload: result
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
