import React from 'react';

function LoginPage() {
  return (
    <div className="login-container">
      <header>
        <img src="/path-to-logo.png" alt="Poll Repo" className="logo" />
      </header>
      
      <h1>Welcome Back!</h1>
      
      <button className="social-login google">
        <img src="/google-icon.png" alt="Google" /> Login with Google
      </button>
      
      <button className="social-login apple">
        <img src="/apple-icon.png" alt="Apple" /> Login with Apple
      </button>
      
      <div className="divider">Or</div>
      
      <form>
        <div className="form-group">
          <label htmlFor="email">Email or username</label>
          <input type="text" id="email" placeholder="Enter your mail or username" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        
        <div className="form-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#forgot-password">Forgot password?</a>
        </div>
        
        <button type="submit" className="login-button">Login</button>
      </form>
      
      <p className="register-link">
        Not registered? <a href="#create-account">Create an Account</a>
      </p>
      
      <footer>
        Any issues? Reach us at <a href="mailto:support@pollrepo.com">support@pollrepo.com</a>
      </footer>
    </div>
  );
}

export default LoginPage;