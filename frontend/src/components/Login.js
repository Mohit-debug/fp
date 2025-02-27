// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './config/axios';

const Login = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axiosInstance.post('/api/login/', formData);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username or Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="login"
                    value={formData.login}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
              </form>
              
              <p className="text-center">
                Don't have an account? <a href="/register" className="text-decoration-none">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;