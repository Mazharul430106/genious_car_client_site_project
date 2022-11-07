import React, {useContext, useEffect, useState}  from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ShowOrdersData from './ShowOrdersData';

const AllOrders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
           setOrders(data);
        })
    },[user?.email])

    const handleDelete = id => {
        const agreey = window.confirm('Are Your Sure Delete Data');
        if(agreey){
           fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
           })
           .then(res=> res.json())
           .then(data=> {
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const reminingOrders = orders.filter(odr=> odr._id !== id)
                    setOrders(reminingOrders);
                }
                console.log(data);
           })
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method : 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.matchedCount > 0){
                const remining = orders.filter(odr=> odr._id !== id);
                const approving = orders.find(odr=> odr._id === id);
                approving.status = 'Approved';
                const newOrders = [approving,...remining];
                setOrders(newOrders);
            }
            console.log(data);
        })
    }



    return (
        <div>
           <h1 className='text-5xl mb-5'>Orders : {orders.length}</h1>
           <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                Delete
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Price</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order=> <ShowOrdersData key={order._id}
                                order={order} handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                                
                            >
                        </ShowOrdersData>)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default AllOrders;