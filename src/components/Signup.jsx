
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
 
const signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = 'Name must contain only letters and spaces';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formData.password)) {
      errors.password = 'Password must contain at least 8 characters, including uppercase, lowercase, and numbers';
    }
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Save data to local storage
    const savedData = JSON.stringify([...JSON.parse(localStorage.getItem('formData') || '[]'), formData]);
    localStorage.setItem('formData', savedData);

    // Clear form data
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // Clear errors
    setErrors({});
  };

    return (
        <>
            <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
                <div className="bg-[#7eec74] rounded-2xl flex max-w-3xl p-5 items-center">
                    <div className="md:block hidden w-1/2">
                        <img
                            className="rounded-2xl max-h-[1600px]"
                            src="https://images.pexels.com/photos/3692625/pexels-photo-3692625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="signup"
                        />
                    </div>
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-[#002D74]">Signup Page</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                       className="p-2 mt-8 rounded-xl border"
                       type="text"
                       name="name"
                       placeholder="name"
                       value={formData.name}
                       onChange={handleChange}
                   />
                    {errors.name && <span>{errors.name}</span>}
                   <div className="relative">
                       <input
                           className="p-2 rounded-xl border w-full"
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder='email'
                           
                       />
                   </div>
                   {errors.email && <span>{errors.email}</span>}
                   <div className="relative">
                       <input
                           className="p-2 rounded-xl border w-full"
                           type="password"
                           name="password"
                           value={formData.password}
                           onChange={handleChange}
                           placeholder='password'
                       />
                   </div>
                   {errors.password && <span>{errors.password}</span>}                   
                   <div className="relative">
                       <input
                           className="p-2 rounded-xl border w-full"
                           type="password"
                           name="confirmPassword"
                           id="con_password"
                           placeholder="confirm-Password"
                           value={formData.confirmPassword}
                           onChange={handleChange}
                       />
                   </div>
                   {errors.confirmPassword && <span>{errors.confirmPassword}</span>}                            
                   <button
                                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                        <Link to="/login">
                            <button
                                className="bg-[#002D74] text-white py-2 rounded-xl w-full my-4 hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                            >
                                Back To Login
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default signup;

