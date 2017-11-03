import API from '../../api'
import { history } from '../../store'

export const PATIENT_UPDATED = 'PATIENT_UPDATED'
const PATIENT_UPDATE = 'PATIENT_UPDATE'

const api = new API()

export default (patientId, patientData) => {
  return (dispatch) => {

    const backend = api.service('patients')

    // api.authenticate()
    //   .then(() => {
        backend.patch(patientId, { type: PATIENT_UPDATE, payload: patientData})

          .then((result) => {

            console.log(result)
                dispatch({
                  type: PATIENT_UPDATED,
                  payload: result
                })
                history.replace(`/patients/${patientId}`)
              })
          .catch((error) => {
            console.log(error)
          })
      // })
  }
}
