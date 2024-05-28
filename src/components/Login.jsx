import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Login() {
    const [formdata, setFormData] = useState({ email: '', password: '' });
    const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem('authenticated') === 'true');

    useEffect(() => {
        sessionStorage.setItem('authenticated', authenticated);
    }, [authenticated]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedData = localStorage.getItem('formData');
        
        if (storedData) {
            const loginData =JSON.parse(storedData)
            console.log("data parsed");

            loginData.forEach((item) => {
                if (formdata.email === item.email && formdata.password === item.password) {
                    setAuthenticated(true);
                }
            });
        }
    };

    if (authenticated) {
        return <Navigate to="/home" />;
    }

    return (
        <>
            <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
                <div className="bg-[#61d5e2] rounded-2xl flex max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-[#002D74]">Login Page</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={formdata.email}
                            />
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={formdata.password}
                                />
                            </div>
                            <button
                                className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>

                        <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">

                        </div>

                        <div className="mt-4 text-sm flex justify-between items-center container-mr">
                            <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
                            <Link to="/signup">
                                <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img
                            className="rounded-2xl max-h-[1600px]"
                            src="https://images.pexels.com/photos/2508735/pexels-photo-2508735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="login-image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
