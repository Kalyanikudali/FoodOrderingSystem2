
import { useState } from 'react';
import { API_BASE_URL } from '../config';

function Register() {

    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${API_BASE_URL}/customers/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(customer)
                }
            );

            const data = await response.text();

            alert(data);

        } catch (error) {
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Customer Registration</h2>

            <form onSubmit={handleRegister}>

                <input
                    name="name"
                    placeholder="Name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={customer.password}
                    onChange={handleChange}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={customer.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    name="address"
                    placeholder="Address"
                    value={customer.address}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Register</button>

            </form>
        </div>
    );
}

export default Register;
