import { APPOINTMENT_CREATED } from '../actions/appointments/create'
import { FETCHED_APPOINTMENTS } from '../actions/appointments/fetch'


export default ( state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_APPOINTMENTS :
    return [ ...payload ]

    case APPOINTMENT_CREATED :
    const newAppointment = { ...payload }
    return [newAppointment].concat(state)

    default :
    return state
  }

}
