import API from '../../api'
import { history } from '../../store'


export const PATIENT_CREATED = 'PATIENT_CREATED'

const api = new API()

export default (patientData) => {
  return (dispatch) => {

    const backend = api.service('patients')

    // api.app.authenticate()
    //   .then(() => {
        backend.create(patientData)
          .then((result) => {
            console.log(result)
            dispatch({
              type: PATIENT_CREATED,
              payload: result

            })
            history.push('/')

          })
          .catch((error) => {
            console.log(error)
          })
      // })
  }
}
