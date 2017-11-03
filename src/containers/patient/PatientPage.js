import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchPatients from '../../actions/patients/fetch';
import { Link } from 'react-router';

class PatientPage extends PureComponent {

componentWillMount(){
  this.props.fetchPatients()

}


renderPatient(patient, index){

   return (
     <div className='patient-fullname'>
     <p>{patient.lastName}, {patient.firstName}<button className="btn-patient"><Link to={`/patients/${patient._id}`} className="link">Edit Patient</Link></button></p>

     </div>
   )
}

render() {
   const currentPatient = null
    if (currentPatient) return null
  const patients = this.props.patients
    if (!patients) return null

  return(
    <div className='row'>
    <div className='full-name'>
      <ul>
      {patients.map(this.renderPatient.bind(this))}
      </ul>
      </div>

    </div>
  )
}

}

const mapStateToProps = ({ patients }) => ({ patients })
export default connect(mapStateToProps, { fetchPatients })(PatientPage)
