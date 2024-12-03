// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './config/axios';
import Navbar from './Navbar';
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    company_name: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/register/', formData);
      if (response.data) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a0530] via-black to-[#2a0530]">
      <Navbar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body bg-gray-800">
                <h2 className="text-3xl font-bold text-white text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label block text-sm font-medium text-gray-400">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    {errors.username && <p className="text-danger">{errors.username}</p>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label block text-sm font-medium text-gray-400">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label block text-sm font-medium text-gray-400">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label block text-sm font-medium text-gray-400">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      required
                    />
                    {errors.confirm_password && <p className="text-danger">{errors.confirm_password}</p>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label block text-sm font-medium text-gray-400">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                    />
                    {errors.company_name && <p className="text-danger">{errors.company_name}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
                </form>
                
                <p className="text-center text-white">
                  Already have an account? <a href="/login" className="text-decoration-none">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;