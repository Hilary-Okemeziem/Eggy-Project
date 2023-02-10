import React from 'react'
import '../Css/Welcome.css'
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className='bg-image'>
        <div className='d-flex align-items-center justify-content-center w-100 h-100'>
            <div className='bg-white box'>
                <div className='box-container'>
                    <div>
                        <h5 className='welcome-text'>Welcome to HomeTech</h5>
                    </div>
                    <p className='pb-4 text-center fs-6'>We protect your credentials from any form of shoulder surfing attacks</p>

                    <Link to='/register'>
                        <button className='my-2 reg-btn'>Register</button>
                    </Link>

                    <Link to='/sign-in'>
                        <button className=' sign-btn'>Sign In</button>
                    </Link>
                </div>

                <div className='d-flex align-items-center justify-content-between mt-4'>
                    <div>
                        <Link to='/' className='text-dark text-decoration-none fs-6'>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link to='/' className='text-dark text-decoration-none fs-6'>FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage