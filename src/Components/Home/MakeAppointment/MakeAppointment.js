import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';


const MakeAppointment = () => {
    return (
        <section className ="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5  d-md-block">
                       <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 py-5 p-4">
                        <h5 className="text-primary text-uppercase" >APPOINTMENT</h5>
                        <h1 className="my-4 text-light">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex<br/> et sed deleniti, laborum aliquid maiores amet vero<br/> distinctio praesentium aspernatur ducimus voluptatem, iste<br/> adipisci excepturi in officia modi ipsum, tenetur consequuntur natus?<br/> Suscipit consequuntur, nam dolorum ab autem eos dolorem aliquam<br/> voluptatibus deleniti asperiores quisquam animi hic sit amet.</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>  
        </section>
    );
};

export default MakeAppointment;