import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className=' p-5 px-8 w-full border-t border-zinc-500  flex items-center bg-[#f7f7f8b8]  bottom-0 z-10'>
            <div className='flex align-center items-center justify-start gap-2 w-1/3'>
                <img src="../src/assets/logo.png" alt="" className='rounded-full ' width={"50px"} />
                <h2 className='text-3xl text-zinc-800 font-bold'>Krishi Suvidha</h2>
            </div>

            <div className='flex  gap-4 justify-between w-1/2'>
                <div className='flex flex-col items-start justify-start  w-1/3'>
                    
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><a href="#contact">How it works</a></h1>
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><a href="#contact">Who we are</a></h1>
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><Link to="/login">Login</Link></h1>
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><Link to="/register">Register</Link></h1>
                </div>
                <div className='flex flex-col items-start justify-start  w-1/3'>
                    
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><Link to="/products">Product</Link></h1>
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><Link to="/add_products">Add Product</Link></h1>
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><a href="#contact">FAQs</a></h1>
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><a href="#contact">Contact</a></h1>
                </div>
                <div className='flex flex-col items-start justify-start  w-1/3'>
                    
                    <h1 className='hover:bg-[#b2d8b4] p-1 rounded-md'><a href="#contact">T&C</a></h1>
                    <h1 > © 2024 Honey Givi Gitika </h1>
                </div>
            </div>

            <div className='flex flex-col items-end justify-end w-1/3'>
                <button className="bg-[#b2d8b4] hover:bg-[#2a7f62] hover:text-white text-black font-bold py-2 px-4 rounded mb-5">Get Started</button>
                <div className='flex gap-2'>
                    <i class="ri-instagram-line" style={{ fontSize: '22px', color: '#2a7f62' }}></i>
                    <i class="ri-twitter-x-line" style={{ fontSize: '22px', color: '#2a7f62' }} ></i>
                    <i class="ri-facebook-box-fill" style={{ fontSize: '22px', color: '#2a7f62' }}></i>
                    <i class="ri-linkedin-box-fill" style={{ fontSize: '23px', color: '#2a7f62' }}></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
