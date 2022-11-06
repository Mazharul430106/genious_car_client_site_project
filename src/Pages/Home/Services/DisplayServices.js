import React from 'react';
import { Link } from 'react-router-dom';

const DisplayServices = ({service}) => {
     const { title, img, price, _id } = service;
    return (
      <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <p>Price : ${price}</p>
                    <Link to={`/orders/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
};

export default DisplayServices;