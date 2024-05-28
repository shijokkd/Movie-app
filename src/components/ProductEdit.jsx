import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ProductEdit() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const [formData, setFormData] = useState({
        movieName: '',
        actors: '',
        description: '',
        image: null,
    });

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const product = storedProducts.find((item, index) => index === parseInt(type));
        if (product) {
            setFormData(product);
        }
    }, [type]);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            image: event.target.files[0],
        });
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a new product object
        const newProduct = {
            movieName: formData.movieName,
            actors: formData.actors,
            description: formData.description,
            // Convert the image to base64 and store it
            image: formData.image ? await getBase64(formData.image) : null,
        };

        // Retrieve existing products from local storage or initialize an empty array
        const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

        // Update the existing product in the array
        existingProducts[parseInt(type)] = newProduct;

        // Store the updated array back in local storage
        localStorage.setItem('products', JSON.stringify(existingProducts));

        // Clear the form
        setFormData({
            movieName: '',
            actors: '',
            description: '',
            image: null,
        });

        // Optional: Display success message or redirect after saving
        alert('Product updated successfully!');
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-400 w-1/2 h-1/2 '>
                <div className="md:w-1/2 px-8 ">
                    <h2 className="font-bold text-3xl text-[#002D74]">Product Edit</h2>
                    <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                        <input
                            className="p-2 mt-8 rounded-xl border"
                            type="text"
                            name="movieName"
                            placeholder="Movie Name"
                            value={formData.movieName}
                            onChange={handleInputChange}
                        />
                        <div className="relative">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="text"
                                name="actors"
                                placeholder="Actors"
                                value={formData.actors}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="relative">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="relative">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="file"
                                name="image"
                                onChange={handleImageChange}
                            />
                        </div>
                        <button
                            className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductEdit;
