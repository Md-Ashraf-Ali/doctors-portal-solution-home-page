import React from 'react';
import doctor from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Doctors = () => {
    return (
        <section className ='doctor-section text-center mb-5'>
            <h2>Ours Doctors</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                       <img className="img-fluid mb-3" src={doctor} alt=""/>
                       <h4>Dr. Coudi</h4>
                       <p> <FontAwesomeIcon className="text-primary" icon={faPhone}/> +880-188-934789</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;