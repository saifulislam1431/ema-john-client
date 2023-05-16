import React, { useContext, useRef } from 'react';
import { UserContext } from '../../Auth/Auth';
import icon from "../../assets/images/google.png";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const{sigIn,googleLog} = useContext(UserContext)
    const emailRef = useRef();
    const navigate = useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        sigIn(email,password)
        .then(res=>{
            const logedUser = res.user;
            console.log(logedUser);
            Swal.fire({
                title: 'Success!',
                text: 'Registration Successful',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              navigate("/")

        })
        .catch(error=>{
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    }

    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'> 
<div className='bg-secondary bg-opacity-40 rounded-md'>
    <div className='bg-white rounded-md border p-5 relative left-2 top-2'>
        <div>
        <h1 className='text-xl font-semibold text-center my-5'>Login</h1>
        <form className='flex flex-col' onSubmit={handleLogin}>
            <label>Email</label>
            
            <input type="email" className='inputField' name='email' required placeholder='Your email' ref={emailRef}/>
            
            <label>Password</label>
            
            <input type="password" className='inputField' name='password' required placeholder='Your password'/>
            <input type="submit" value="Sign In" className='myBtn'/>
            <p className='text-center font-[600]'>New to Ema-John? <Link className='text-primary' to="/signup">Sign Up</Link></p>
            <div className="divider">or</div>

        </form>
       <div className='text-center'>
       <button className='border py-2 rounded-md font-semibold inline-flex text-center items-center justify-center gap-2 w-80'><img src={icon} alt="Google" className='w-7'/> Continue with Google</button>
       </div>
        </div>

    </div>
</div>
        </section>
    );
};

export default Login;