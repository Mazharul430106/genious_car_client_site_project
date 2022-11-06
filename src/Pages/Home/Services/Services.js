import React from 'react';
import {useEffect, useState} from 'react';
import DisplayServices from './DisplayServices';

const Services = () => {
    const [services , setServices] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
            {
                services?.map(service=> <DisplayServices key={service._id} service={service} ></DisplayServices> )
            }
        </div>
    );
};

export default Services;