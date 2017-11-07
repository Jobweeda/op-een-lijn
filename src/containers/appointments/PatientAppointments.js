import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getPatient from '../../actions/patients/get';


class PatientAppointments extends PureComponent {

  componentWillMount() {
    this.props.getPatient(this.props.params.patientId)
  }


render() {
  const  {currentPatient}  = this.props
      if(!currentPatient) return null
  return(
    <div className='appointment-container'>
    <div className='patient-name'>
     <h2>{currentPatient.firstName} {currentPatient.lastName}</h2>
    </div>
    <div className='patient-appointments'>

    </div>
    </div>
  )
}

}

const mapStateToProps = ({ currentPatient }) => ({ currentPatient })

export default connect(mapStateToProps, { getPatient })(PatientAppointments)
