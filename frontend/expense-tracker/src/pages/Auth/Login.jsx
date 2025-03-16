import React, { useState } from 'react'
import AuthLayout from '../../component/layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../component/Inputs/Input';
import { validateEmail } from '../../utills/helper';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  //handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();

  if (!validateEmail(email)) {
    setError("Please enter a valid email address.");
    return;
  }
  if (!password) {
    setError("Please enter the password");
    return;
  }
    setError("");
  }

  return (
    <AuthLayout>
      <div className="lg:w-(70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold Otext-black">Welcome Back</h3>
        <p Bp classNane="text-xs Otext-slate-700 mt-[5px) mb-6">
        Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="min 8 char"
            type="Password"
          />  

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

            <button type="submit" className="btn-primary">
              LOGIN
            </button>

            <p className="text-[13px] Otext-slate-800 mt-3">
               Don't have an account?{" "}
            <Link className="font-medium text-primary underline" to="/signup">
               SignUp
            </Link>
            </p>

        </form>  
      </div>
    </AuthLayout>
  )
}

export default Login