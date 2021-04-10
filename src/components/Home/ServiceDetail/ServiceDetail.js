import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '60px' }} src={service.image} alt="" />
            <h5 className="mt-5 mb-5">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit error autem facilis recusandae esse? Aspernatur!</p>

        </div>
    );
};

export default ServiceDetail;