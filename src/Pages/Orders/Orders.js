import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Orders = () => {

    const selectedService = useLoaderData();
    const { title, price, _id } = selectedService;
    const { user } = useContext(AuthContext);
    // console.log(user);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.fristName.value} ${form.lastName.value}`;
        const phoneNumber = form.phoneNumber.value;
        const email = user?.email || 'UnRegistrad';
        const message = form.message.value;
        // console.log(name,phoneNumber,email,message);

        const order = {
            service: _id,
            serviceName : title,
            price,
            costomar : name,
            email,
            phoneNumber,
            message
        }

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('Order added Successfully')
                form.reset();
            }
            console.log(data);
        })
        .catch(error=> console.log(error))
    }

    return (
        <div>
            <h3 className='text-xl mb-1'>Your about to order : {title}</h3>
            <h4 className='text-xl mb-1'>Price :${price}</h4>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <input name='fristName' type="text" placeholder="Frist Name" className="input input-bordered input-info w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full" />
                    <input name='phoneNumber' type="number" placeholder="Phone" className="input input-bordered input-info w-full" />
                    <input name='email' type="email" placeholder="Email" className="input input-bordered input-info w-full" defaultValue={user?.email} readOnly />
                </div>
                <textarea name='message' className="textarea textarea-info w-full my-3" placeholder="Message"></textarea>
                <button className="btn btn-info">Add Order</button>
            </form>
        </div>
    );
};

export default Orders;