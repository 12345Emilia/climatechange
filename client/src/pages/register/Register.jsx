import { axiosInstance } from '../../config';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='register'>
      <div className='registerWrapper'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type='text'
            className='registerInput'
            placeholder='Please enter your username...'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='text'
            className='registerInput'
            placeholder='Please enter your email...'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            className='registerInput'
            placeholder='Please enter your password...'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='registerButton' type='submit'>
            Register
          </button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to='/login'>
            Login
          </Link>
        </button>
        {error && (
          <span style={{ color: 'red', marginTop: '10px' }}>
            Something is wrong!
          </span>
        )}
      </div>
    </div>
  );
}
