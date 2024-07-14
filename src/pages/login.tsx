import { useState, useEffect } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

interface loginPageProps {
  setIsAuthenticated: (value: boolean) => void;
}

const LoginPage = ({
  setIsAuthenticated
}: loginPageProps) => {

  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("email")) {
      setIsAuthenticated(true);
      navigate("/home");
    }
  }, [])
  

  const createAccount = () => {
    if(!email) {
      alert('Please enter your email address.');
      return;
    }

    localStorage.setItem('email', email);
    setIsAuthenticated(true);
    navigate("/home");
  }

  return (
    <div className='container loginPage'>
      <div className='loginContainer'>
        <div className='innerLogin'>
          <h2 className='createAccount'>Create a new account</h2>
          <input 
            className='emailInput' 
            type="email" 
            value={email}
            placeholder='Enter your email address...' 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className='accountBtn'
            onClick={createAccount}
          >Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
