import React from 'react'
import Button from '../Components/base/button/button'
import background from "../Assets/loginbgImage.svg";
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-2 h-screen">
            <div className='flex flex-col items-center justify-center relative'>
                <span className='text-5xl text-black text-start'>
                    All of your ebook<br /> collection in one<br /> platform
                </span>
                <span className='text-lg text-gray-600 text-justify mt-5'>
                    World bestseller, scientific work,entertainment<br />literature and many more all in one platform,
                </span>
                <Button className=" py-3 text-white mt-4" color="primary" submit onClick={() => { navigate('/signIn') }} >{`Get Started`}</Button>
            </div>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: "contain",
                backgroundRepeat: 'no-repeat',
            }} />
        </div>
    )
}
