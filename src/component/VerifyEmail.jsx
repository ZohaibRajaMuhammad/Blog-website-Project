import { useEffect } from 'react';

// Define the handleAuthError function
const handleAuthError = (error) => {
  console.error('Authentication error:', error);
};
import { sendEmailVerification } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate('/login');
    if (currentUser?.emailVerified) navigate('/');
  }, [currentUser, navigate]);

// After user creation
const sendVerificationEmail = async () => {
  try {
    await sendEmailVerification(currentUser);
  } catch (err) {
    console.error('Signup error:', err);
    handleAuthError(err);
  }
};

sendVerificationEmail();

  return (
    
    <div className="auth-container">
      <h2>Verify Your Email</h2>
      <p>We ve sent a verification email to {currentUser?.email}</p>
      <button onClick={() => window.location.reload()}>
        I ve verified my email
      </button>
    </div>
  );
};

export default VerifyEmail;