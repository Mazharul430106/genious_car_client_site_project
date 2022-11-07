import React, { useEffect, useState } from 'react';

const ShowOrdersData = ({ order, handleDelete, handleStatusUpdate }) => {
    console.log(order);
    const { _id, serviceName, price, phoneNumber, costomar, service, status } = order;
    const [orderService, setOrderService] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
            .catch(error => console.log(error))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{costomar}</div>
                        <div className="text-sm opacity-50">{phoneNumber}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>${price}</td>
            <th>
                <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>

    );
};

export default ShowOrdersData;