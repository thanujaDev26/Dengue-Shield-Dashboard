import { useAuth } from '../Authentications/AuthContext.jsx';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        const userData = { name: 'John Doe', email: 'john.doe@example.com' };
        login(userData);
    };

    return (
        <div className="h-screen flex justify-end items-center bg-[url('images/Login.jpg')] bg-cover bg-no-repeat bg-left">
            <div className='md:h-3/4 md:w-1/3 bg-white flex justify-center items-center mr-20'>
                <form className='w-3/4' action={handleLogin}>
                    <div>
                        <h1 className='font-bold text-5xl mb-8 text-gray-600'>Login</h1>
                        <div className='flex flex-col mb-10'>
                            <labal>Username</labal>
                            <input type="text" className='border-b-2 border-black focus:outline-none w-full'></input>
                        </div>
                        <div className='flex flex-col mb-10'>
                            <labal>Password</labal>
                            <input type="password" className='border-b-2 border-black focus:outline-none w-full'></input>
                        </div>
                        <div className='mb-10 flex justify-center items-center'>
                            <button type="submit" onClick={handleLogin} className='w-1/2 p-2 rounded-full bg-gray-600'>Login</button>
                        </div>
                    </div> 
                </form>               
            </div>
        </div>
    );
};

export default Login;
