import React, { useState } from "react";
import './login.css'; // Imp
import logo from '../../assets/images/logo_W.png'

function LoginPage() {
    const [activeTab, setActiveTab] = useState('login');

    const openTab = (tabName) => {
      setActiveTab(tabName);
    };
  return (
    <div className="login-container">
      <div className="login-box">
      <div className="tabs flex-container m-b-15">
          <button className={`tab-btn button-tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => openTab('login')}>Login</button>
          <button className={`tab-btn button-tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => openTab('register')}>Register</button>
        </div>
        <div className="flex-container justify-flex">
          <h2>{activeTab === 'login' ? 'Đăng nhập' : 'Đăng ký'}</h2>
          <img src={logo} className="login-logo" alt="Logo" />
        </div>
        
        {activeTab === 'login' ? (
            <>
          <form>
            <div className="input-group">
              <input type="text" name="username" id="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input type="password" name="password" id="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="button-login">Login</button>
            </form>
          
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <div className="flex-container justify-flex">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
    
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>
    
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
    
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            </>
        ) : (
          <form>
           <div className="input-group">
              <input type="text" name="username" id="username" required />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-group">
              <input type="email" name="password" id="password" required />
              <label htmlFor="password">Email</label>
            </div>
            <div className="input-group">
              <input type="password" name="password" id="password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-group">
              <input type="text" name="address" id="address" required />
              <label htmlFor="password">Địa chỉ</label>
            </div>
            <button type="submit" className="button-login">Đăng ký</button>
          </form>
        )}

        
      </div>
    </div>


  );
}

export default LoginPage;
