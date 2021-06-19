import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style ={{height:'50px'}} src={service.img} alt="" />
            <h3 className="mt-3">{service.name}</h3>
            <p className="text-secondary mt-5 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus quidem deserunt enim culpa, rerum quibusdam, cumque obcaecati dolore voluptatum veniam officia tenetur dolores modi. Magni reprehenderit dolores, ipsa distinctio necessitatibus consectetur</p>
        </div>
    );
};

export default ServiceDetail;