import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Component/Services.js';
import Contact from './Component/Contact.js';
import Registration from './Component/Registration.js';
import Login from './Component/Login.js';
import Error from './Component/Error.js';
import AdminPage from './Layout/AdminPage.js'
import AdminStudents from './Component/AdminStudents.js';
import AdminContacts from './Component/AdminContacts.js';
import AdminAddServices from './Layout/AdminAddServices.js';
import AdminDeleteServices from './Component/AdminDeleteServices.js';
import ScrollToTop from './Component/ScrollToTop.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
          <Route path='/admin' element={<AdminPage />}>
            <Route path='students' element={<AdminStudents />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='service/add' element={<AdminAddServices />} />
            <Route path='service/delete' element={<AdminDeleteServices />} />
          </Route>
        </Routes>
        <ScrollToTop />
      </BrowserRouter>


      {/* <ToastContainer /> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      // transition:Bounce
      />

    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
