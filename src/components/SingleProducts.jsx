import React, { useState, useEffect } from 'react';
import Navebar from './Navebar';
import { useLocation } from 'react-router-dom';

function SingleProducts() {
  const [star, setStar] = useState(null); // State to track selected star rating

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = storedProducts.find((item, index) => index == type);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [type]);

  const handleStarClick = (value) => {
    setStar(value);
    // Here you can save the selected star rating to the database or perform any other action
  };

  if (!product) {
    // Product is not loaded yet
    return null;
  }

  return (
    <>
      <Navebar />
      <div className='w-full h-[88vh] flex items-center justify-center'>
        <div className='flex w-[70%] h-[70%] rounded-t-xl'>
          <div className='bg-orange-200 w-[50%] border-double border-[40px] border-red-950 rounded-lg'>
            <img className='w-full h-full' src={product.image} alt="" />
          </div>
          <div className='w-[50%] flex flex-col items-center justify-center rounded-t-lg'>
            <h1 className='text-2xl font-black'>{product.movieName}</h1>
            <h3 className='text-xl fontxl p-5'>{product.actors}</h3>
            <h3 className='text-xl fontxl text-center p-5'>{product.description}</h3>
            <div className=' flex'>
              {[1, 2, 3, 4, 5].map((value) => (
                <svg
                  key={value}
                  onClick={() => handleStarClick(value)}
                  className={`w-7 h-7 text-gray-300 me-1 dark:text-gray-500  ${ star&&value <= star ? 'text-yellow-400' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProducts;
