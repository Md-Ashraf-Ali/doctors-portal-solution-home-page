import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name:'fluoride treatment',
        img:fluoride
    },{
        name:'Cavity Filling',
        img:cavity
    },{
        name:'Teath Whitening',
        img:whitening
    }
]

const Services = () => {
    return (
        <section className ="service-container mb-10">
            <div className="text-center">
              <h5 style={{marginTop: '20PX'}}>our services</h5>
              <h1 style={{marginBottom:'50px'}}>Service we provide</h1>
            </div>
            <div className ="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {
                        serviceData.map(service=> <ServiceDetail service ={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;