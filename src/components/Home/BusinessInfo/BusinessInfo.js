import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        'title': 'Opening Hours',
        'description': 'We are open 24 * 7',
        'icon': faClock,
        'background': 'primary'
    },
    {
        'title': 'Visit Our Location',
        'description': 'Dhaka, Panthapath',
        'icon': faMapMarker,
        'background': 'dark'
    },
    {
        'title': 'Call us',
        'description': '+880101010101',
        'icon': faPhone,
        'background': 'primary'
    },
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;