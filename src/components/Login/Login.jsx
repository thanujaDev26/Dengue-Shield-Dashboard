import { useAuth } from '../Authentications/AuthContext.jsx';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        const userData = { name: 'John Doe', email: 'john.doe@example.com' };
        login(userData);
    };

    return (
        <div className="flex justify-center items-center">
            <div className='md:w-2/3 flex justify-center items-center'>
                <img src='images/Login.jpg' className='w-3/4'></img>
            </div>
            <div className='md:w-1/3 flex justify-center items-center h-full'>
                <form className='' action=''>
                    <div className='bg-slate-300 p-12 rounded-xl'>
                        <h1 className='font-bold text-5xl mb-8 text-gray-600'>Login</h1>
                        <div className='flex flex-col mb-10 bg-transparent'>
                            <labal>Username</labal>
                            <input type="text" className='border-b-2 border-black focus:outline-none w-full bg-transparent'></input>
                        </div>
                        <div className='flex flex-col mb-10'>
                            <labal>Password</labal>
                            <input type="password" className='border-b-2 border-black focus:outline-none w-full bg-transparent'></input>
                        </div>
                        <div className='mb-10 flex justify-center items-center'>
                            <button type="submit" onClick={handleLogin} className='w-1/2 p-2 rounded-full bg-gray-600'>Login</button>
                        </div>
                        <div className='flex justify-center items-center mb-10'>
                            <labal>If you don't have an account? <a href="#"><u><b>Sign Up</b></u></a></labal>
                        </div>
                    </div> 
                </form>               
            </div>
        </div>
    );
};

export default Login;
