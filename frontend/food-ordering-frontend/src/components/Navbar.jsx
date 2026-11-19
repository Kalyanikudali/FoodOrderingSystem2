import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <nav>
      <h2>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Foodies
        </Link>
      </h2>

      <ul>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            My Cart
          </Link>
        </li>
        {userEmail ? (
          <>
            <li style={{ color: '#ffe0b2' }}>👤 {userEmail.split('@')[0]}</li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
