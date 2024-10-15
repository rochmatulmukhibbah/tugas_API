import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to your dashboard!{props.popupProps}</p>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="masukkan email" id="email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="masukkan password" id="password"/>
      </div>
      <button>login</button>
      <p>Belum punya akun? <a onClick={() => navigate('/register')}>Daftar</a></p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  popupProps: state.popup
})

export default connect(mapStateToProps, null)(Dashboard);