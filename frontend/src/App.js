
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouter from './Router/CustomerRouter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axiosInstance from './Redux/axiosInstance';
import { setUser } from './Redux/userReducer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      console.log("token",token)
      if (token) {
        try {
          const response = await axiosInstance.get('/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          dispatch(setUser(response.data));
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      }
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<CustomerRouter />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
