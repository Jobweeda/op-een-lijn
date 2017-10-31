import { PATIENT_CREATED } from '../actions/patients/create'
import { FETCHED_PATIENTS } from '../actions/patients/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

  case FETCHED_PATIENTS :
    return [ ...payload ]

  case PATIENT_CREATED :
    const newPatient = {...payload}
    return [newPatient].concat(state)

  default :
    return state
}

}
