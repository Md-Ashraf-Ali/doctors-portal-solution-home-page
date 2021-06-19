import React from 'react';
import winson1 from '../../../images/winson1.png';
import winson2 from '../../../images/winson2.png';
import winson3 from '../../../images/winson3.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import qutetion from '../../../images/qutetion.png'
import './Testimonial.css';

const testimonialData = [
    {
        name:'Winson Herry',
        town:'california',
        img:winson1
    },
    {
        name:'Winson Herry',
        town:'california',
        img:winson2
    },
    {
        name:'Winson Herry',
        town:'california',
        img:winson3
    }
]

const Testimonial = () => {
    return (
        <section className =" testimonial-section">
            <div className='d-flex '>
                <div className="col-md-6 testimonil-header ">
                    <h5>Testimonial</h5>
                    <h2>What's Our Patients<br/> Says</h2>
                </div>
                <div className="side-img col-md-6 ">
                    <img src={qutetion} alt="" />
                </div>
            </div>
            
            <div className ="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {
                    testimonialData.map(tData=><TestimonialDetail tData={tData}></TestimonialDetail>) 
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;