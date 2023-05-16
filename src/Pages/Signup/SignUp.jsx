import React, { useContext } from 'react';
import { UserContext } from '../../Auth/Auth';
import icon from "../../assets/images/google.png";
import { Link } from 'react-router-dom';
const SignUp = () => {
    const{} = useContext(UserContext)
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'> 
<div className='bg-secondary bg-opacity-40 rounded-md'>
    <div className='bg-white rounded-md border p-5 relative left-2 top-2'>
        <div>
        <h1 className='text-xl font-semibold text-center my-5'>Login</h1>
        <form className='flex flex-col'>
            <label>Email</label>
            
            <input type="email" className='inputField' name='email' required placeholder='Your email' />
            
            <label>Password</label>
            
            <input type="password" className='inputField' name='password' required placeholder='Your Password'/>

            <label>Confirm Password</label>
            
            <input type="password" className='inputField' name='confirmPassword' required placeholder='Confirm Password'/>
            <input type="submit" value="Sign In" className='myBtn'/>
            <p className='text-center font-[600]'>Already Have an account? <Link to="/login" className='text-primary'>Sign In</Link></p>
            <div className="divider">or</div>
        <button className='border py-2 rounded-md font-semibold inline-flex text-center items-center justify-center gap-2'><img src={icon} alt="Google" className='w-7'/> Continue with Google</button>
        </form>
        </div>

    </div>
</div>
        </section>
    );
};

export default SignUp;