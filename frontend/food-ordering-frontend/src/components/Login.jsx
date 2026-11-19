
import { useState } from 'react';
import { API_BASE_URL } from '../config';

function Login() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${API_BASE_URL}/customers/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                }
            );

            const data = await response.text();

            alert(data);

        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Customer Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>

            </form>
        </div>
    );
}

export default Login;
