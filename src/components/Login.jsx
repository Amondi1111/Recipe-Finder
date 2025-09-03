import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login with:", { email, password});

    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-[#9B3131]">
        <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNmae="w-full mb-3 px-3 py-2 border rounded"
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            classNmae="w-full mb-3 px-3 py-2 border rounded"
            />

            <button
            type="Submit"
            className="w-full bg-[#FF6347] text-white py-2 rounded hover:[#9B3131]"
            >
                Login
            </button>

            <p className="mt-4 text-sm text-center">
                Don't have an account?{" "}
                <Link to="/Signup" className="text-[#FF6347] hover:underline">
                    Signup
                </Link>
            </p>
        </form>
      </div>  
    );
}


export default Login;