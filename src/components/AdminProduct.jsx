import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createSearchParams , useNavigate } from 'react-router-dom';

function AdminProduct() {

  const navigate = useNavigate()
  const handlDelete = (id) => {
    const localData = JSON.parse(localStorage.getItem('products')) || [];
    const indexToDelete = localData.findIndex(product => product.movieName === id);
    
    if (indexToDelete !== -1) {
      // Remove the item from the array
      localData.splice(indexToDelete, 1);
       
      // Update the local storage with the modified data
      localStorage.setItem('products', JSON.stringify(localData));
      
      // Optional: Display success message or update UI
      alert('Product deleted successfully!');
    } else {
      // Optional: Handle case where the product with the given ID is not found
      alert('Product not found or already deleted!');
    }
  };
  const [products, setProducts] = useState([]);

  
  
  useEffect(() => {
    // Retrieve products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    
  }, []);

  return (
    <>
      <div>
        <table className='table-auto w-[100%]'>
          <thead>
            <tr>
              <th><center>Movie Image</center></th>
              <th><center>Movie Name</center></th>
              <th><center>Actors</center></th>
              <th><center>Edit</center></th>
              <th><center>Delete</center></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td><center><img  className=' h-[90px]' src={product.image} alt="Movie" style={{ width: '100px' }} /></center></td>
                <td><center>{product.movieName}</center></td>
                <td><center>{product.actors}</center></td>
                <td><center><button className=' border bg-red-300 w-full rounded-lg'  onClick={() => {
          navigate({
            pathname: "/productedit",
            search: `?${createSearchParams({
              type: index
            })}`
          });
        }}   > Edit </button></center></td>
                <td><center><button className=' bg-amber-600 w-full rounded-xl' onClick={()=>handlDelete(product.movieName)}>Delete</button></center></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminProduct;
