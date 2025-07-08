import React from 'react'
import login_background from '../assets/images/login_background.jpg'
function Login() {
  return (
<div className='Login'>
    <div className='login-container flex flex-column'>
        <div className='left-login-form w-[50%]'>
            <div className='label p-10 text-2xl font-semibold border-b'>
                <p>ĐĂNG NHẬP</p>
            </div>
            <div className='login-form px-10'>
                <div className='input-info pt-10 text-[#525f7f] text-semibold text-base'>
                    <div className="email-input">
                        <label>Email</label>
                        <div className="email-input-box mt-3">
                            <input className='border h-10 rounded-lg w-full' type="text" />
                        </div>
                    </div>
                    <div className="password-input mt-8">
                        <label>Password</label>
                        <div className="password-input-box mt-3">
                            <input className='border h-10 rounded-lg w-full' type="text" />
                        </div>
                    </div>
                </div>
                <div className='forgot-password mt-8 text-blue-600'>
                    Quên mật khẩu?
                </div>
                <div className="button-login mt-8">
                    <button className='h-10 rounded-lg w-full bg-blue-600 text-white font-medium'>ĐĂNG NHẬP</button>
                </div>
            </div>
        </div>
        <div className='right-login-image w-[50%]'>
            <img src={login_background} className='w-full'></img>
        </div>
    </div>
</div>
  )
}

export default Login
