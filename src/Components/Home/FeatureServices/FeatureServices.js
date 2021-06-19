import React from 'react';
import feature from '../../../images/feature.png';
import './FeatureServices.css';

const FeatureServices = () => {
    return (
        <section className ="feature-service">
            <div className='feature-container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                       <img style={{height:'520px',width:'60%',marginLeft:'250px'}} src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{marginBottom:'40px'}}>Exceptional Dental <br/> Care, on Your Terms</h1>
                        <p style={{marginTop:'20px',lineHeight:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing <br/>In recusandae, nesciunt tempore cumque doloremque minima cum porro<br/> odit sunt. Quas mollitia nesciunt inventore nobis ut! Numquam<br/> vitae laboriosam aspernatur sequi, expedita consequatur<br/> aliquid quam, quasi repellat ea tempore possimus dolorum vero nesciunt ex<br/> delectus laborum, molestias nulla ipsa! Dolor asperiore quidem repellat autem<br/> nihil iure, error est. quasi repellat ea tempore possimus dolorum vero nesciunt<br/> Dolor asperiores debitis nisi eaque quidem repellat autem nihil iure, error est.</p>
                        <button style={{marginTop:'25px'}} className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>   
        </section>
    );
};

export default FeatureServices;