import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {

    const selectedService = useLoaderData();
    console.log(selectedService);


    return (
        <form className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <input type="text" placeholder="Frist Name" className="input input-bordered input-info w-full" />
            <input type="text" placeholder="Last Name" className="input input-bordered input-info w-full" />
            <textarea className="textarea textarea-info" placeholder="Message"></textarea>
            <input type="text" placeholder="Email" className="input input-bordered input-info w-full" />
            <button className="btn btn-info">Add Order</button>
        </form>
    );
};

export default Orders;