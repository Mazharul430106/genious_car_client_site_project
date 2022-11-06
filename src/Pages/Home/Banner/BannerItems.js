import React from 'react';
import './BannerItems.css';

const BannerItems = ({ slide }) => {
    const { image, id, next, prev } = slide;
    return (       
        <div id={`slide${id}`} className="carousel-item relative w-full my-10 ">
            <div className='carousel-img'>
                <img src={image} alt=''  className="w-full rounded-lg" />
            </div>
            <div className='absolute top-1/4 left-16'>
                <h1 className='text-6xl text-white font-semibold'>
                    Affordable <br />
                    price for car <br /> 
                    servicing
                </h1>
            </div>
            <div className='absolute top-2/4 left-16'>
                <p className='text-white font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Mollitia consequatur ad fuga minima</p>
            </div>
            <div className='absolute top-3/4 flex gap-3 left-16'>
                <button className="btn btn-outline btn-warning">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-10">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>    
    );
};

export default BannerItems;