import { useState } from 'react'
import Button from '../Components/base/button/button'
import Field from '../Components/base/field/field'
import Icon from '../Components/base/icon/icon';
import background from "../Assets/loginbgImage.svg";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
            <form className="bg-white flex flex-col md:justify-center justify-start md:mt-0 mt-10 items-center rounded-md">
                <span className='text-xl text-center uppercase'>
                    Login Page...!
                </span>
                <Field type='text' name='userName' placeholder='User Name' className='mt-4' />
                <div>
                    <div className="relative">
                        <Field
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder={('Password') + ' *'} id="input_password" className='px-2 h-12 mt-4'
                        />
                        {<span className='absolute top-4 right-4 cursor-pointer text-gray-400' onClick={() => { setShowPassword(!showPassword) }}>{!showPassword ? <Icon icon="EYE_SLASH" /> : <Icon icon="EYE" />}</span>}</div>
                </div>
                <div className='justify-center items-center flex flex-col'>
                    <Button className=" py-3 text-white mt-4" color="primary" submit onClick={() => { navigate('/home') }} >{`Login`}</Button>
                </div>
                <></>
                <div className='justify-center items-center flex flex-col py-5'>
                    <span className='text-md text-gray-600 cursor-pointer' onClick={() => { navigate('/signUp') }}>
                        Create a new account...!
                    </span>
                </div>
            </form>
            <div className='-order-last md:order-1' style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: "contain",
                backgroundRepeat: 'no-repeat',
            }} />
        </div>
    )
}
