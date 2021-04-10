import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        'name': 'Fluoride Treatment',
        'image': fluoride,
    },
    {
        'name': 'Cavity Feeling',
        'image': cavity,
    },
    {
        'name': 'Teeth Whitening',
        'image': whitening,
    },
]

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center">
                <h5 className="mt-5" style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 className="mt-5 mb-5">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;