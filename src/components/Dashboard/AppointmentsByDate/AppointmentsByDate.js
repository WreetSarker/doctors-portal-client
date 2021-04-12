import React from 'react';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            {
                appointments.map(appointment => <li key={appointment._id}>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;