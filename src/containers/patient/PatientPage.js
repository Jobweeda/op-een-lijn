import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fetchPatients from '../../actions/patients/fetch';
import { Link } from 'react-router';
import '../../styles/PatientPage.css'

class PatientPage extends PureComponent {

componentWillMount(){
  this.props.fetchPatients()

}


renderPatient(patient, index){

   return (
     <div key={index} className="patient col-md-4 col-sm-6">
     <div className='patient-box'>
       <div className='patient-fullname'>
       <div className='patient-buttons'>
         <p className='patient-attr'>{patient.lastName}, {patient.firstName} {patient.appointments}</p>

         <button className='btn-patient'><Link to={`/${patient._id}/appointments`} className='link'>Voeg een afspraak toe</Link></button>
         <button className="btn-patient"><Link to={`/patients/${patient._id}`} className="link">Pas patient aan</Link></button>
         </div>
       </div>
       </div>
     </div>
   )
}

render() {
  //  const currentPatient = null
  //   if (currentPatient) return null
  const patients = this.props.patients || this.props.patientId
    if (!patients) return null
  return(
    <div className='row'>
    <div className='full-name'>
      {patients.map(this.renderPatient.bind(this))}
      </div>
    </div>
  )
}

}

const mapStateToProps = ({ patients }) => ({ patients })
export default connect(mapStateToProps, { fetchPatients })(PatientPage)
