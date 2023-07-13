import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "../src/pages/Homepage/home"
import ContactUs from './pages/Contact/Contact'
import AboutUs from './pages/aboutus/AboutUs'
import Login from './pages/login/Login';
import Profile from '../src/pages/profile/profile';
import New from './pages/admin/new/New';
import Dashboard from '../src/pages/admin/dashbord/dashbord'
import NewEntity from '../src/pages/admin/newentity/newentity'
import Course from './pages/student/course/course'
import AdminProfile from './pages/profile/adminprofile'
import Updateentity from './pages/admin/newentity/updateentity';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
   
        <Route path="/profile" element={<Profile />} />
        <Route exact path="/students" element={<New choice = 'student' />} />
          <Route exact path="/courses" element={<New choice = 'course' />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Newentitycourse" element={<NewEntity choice = 'course' />} />
          <Route exact path="/Newentitystudent" element={<NewEntity choice = 'student' />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/adminprofile" element={<AdminProfile />} />
          <Route exact path="/course/redirect-page.html" element={<Updateentity choice = 'course' />} />
          <Route exact path="/user/redirect-page.html" element={<Updateentity choice = 'student' />} />

          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />

     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
