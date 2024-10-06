import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   navigate('/dashboard', { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src='/logo.png' alt="Login" className='logo' />
        <img src='/pablo-sign-in.png' alt="Login" className='login-image' />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <h1 className='login-header'>Welcome!</h1>
          <p>Enter details to login.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
            <button type="submit" className="login-button">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;