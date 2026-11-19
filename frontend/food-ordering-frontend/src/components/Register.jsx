import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function Register() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

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
            setMessage(data);

            if (data.toLowerCase().includes('success')) {
                setTimeout(() => navigate('/login'), 1200);
            }

        } catch (error) {
            setMessage('Registration failed. Please check backend connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '40px auto', padding: '25px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#ff6b35' }}>Customer Registration</h2>

            {message && (
                <div style={{
                    padding: '10px',
                    borderRadius: '6px',
                    marginBottom: '15px',
                    textAlign: 'center',
                    backgroundColor: message.toLowerCase().includes('success') ? '#e6f4ea' : '#fce8e6',
                    color: message.toLowerCase().includes('success') ? '#137333' : '#c5221f'
                }}>
                    {message}
                </div>
            )}

            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    name="name"
                    placeholder="Full Name"
                    value={customer.name}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={customer.email}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={customer.password}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    value={customer.phone}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                    required
                />

                <input
                    name="address"
                    placeholder="Delivery Address"
                    value={customer.address}
                    onChange={handleChange}
                    style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '12px',
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
                Already have an account? <Link to="/login" style={{ color: '#ff6b35' }}>Login here</Link>
            </p>
        </div>
    );
}

export default Register;
