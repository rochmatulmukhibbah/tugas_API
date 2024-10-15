import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuHome from './Pages/menuhome/MenuHome';
import Register from './Pages/register/Register';
import Dashboard from './Pages/dashboard/Dashboard';
import { store } from './redux/store/Store';
import { Provider, connect } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<MenuHome />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;