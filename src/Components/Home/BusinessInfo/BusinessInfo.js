import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'
const infosData = [
    {
        title:'opening hour',
        description:'we are open 7 days',
        icon: faClock,
        background:'primary'

    },{
        title:'Visit Our Location',
        description:'brooklyn, NY-10036, United states',
        icon:faMapMarked,
        background:'secondary'

    },{
        title:'Contact Us Now',
        description:'+12345645309',
        icon: faPhone,
        background:'primary'

    }
]

const BusinessInfo = () => {
    return (
        <section className ="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infosData.map(info=> <InfoCard info ={info}></InfoCard>)
                }
            </div>
            
            
        </section>
    );
};

export default BusinessInfo;