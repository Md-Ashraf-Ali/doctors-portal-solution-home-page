import React from 'react'; 
import './TestimonialDetail.css';

const TestimonialDetail = ({tData}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card shadow p-3 mb-5 bg-body rounded" style={{padding:"10px", marginTop:'50px', marginBottom:'50px'}}>
                <div>
                    <p>With supporting text below as a natural lead-in to additional content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex similique rem cupiditate vel, quisquam consequatur quidem harum eveniet quaerat expedita deserunt eius, laboriosam doloribus animi blanditiis adipisci molestiae veritatis!.</p>
                </div>
                <div className="card-img d-flex ">
                    <div>
                      <img style={{padding:'20px'}} src={tData.img} alt="" />
                    </div>
                    <div style={{marginTop: '30px'}}>
                       <p>{tData.name}</p>
                       <p>{tData.town}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;