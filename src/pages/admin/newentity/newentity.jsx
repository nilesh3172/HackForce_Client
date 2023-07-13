
import AdminSidebar from "../../../components/sidebar/adminsidebar";

import axios from "axios";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./newentity.css";
import {baseurl} from "../../../services/helper"
import useBackButtonReload from "../../../hooks/backbutton";
const Newentity = (props) => {
  useBackButtonReload();
  const { choice } = props;
  const uppercaseChoice = choice.toUpperCase();


  const handlestudent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      'username' : formData.get('username'),
      'name' : formData.get('name'),
      'email' : formData.get('email'),
     
      'password':formData.get('password')
    }
    
    try {

      await axios.post(`${baseurl}/api/auth/register`, data);
    } 
    catch (err) {console.log(err)}
  };

 
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      'course_code' : formData.get('course_code'),
      'name' : formData.get('course_name'),
      'faculty' : formData.get('faculty')
    }
    console.log(data);
    try {
      await axios.post(`${baseurl}/api/course/create`, data);
    } 
    catch (err) {console.log(err)}
  };


  let form;


  switch (choice) {
    
    case 'student':
     
      form = ( 
        <>
         <form>
            <Typography variant="h6" gutterBottom>
        New_User
      </Typography>
      <Box component="form" noValidate onClick={handlestudent} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="name"
                
                id="name"
                autoComplete="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                id="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                id="password"
                autoComplete="password"
              />
               
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SUBMIT
              </Button>
              

            </Box>
        
     
            </form>
        </>
      );
      break;
    case 'course':
      form = (
        <>
         
         <form>
            <Typography variant="h6" gutterBottom>
        New_Course
      </Typography>
      <Box component="form" noValidate onClick={handleClick} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="course_name"
                label="course_name"
                name="course_name"
                autoComplete="course_name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="course_code"
                label="course_code"
                
                id="course_code"
                autoComplete="course_code"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="faculty"
                label="faculty"
                id="faculty"
                autoComplete="faculty"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SUBMIT
              </Button>
              

            </Box>
            </form>
        </>
      );
     
      break;
      default:
        break;
      
  }


  return (
    <div className="new" style={{paddingTop : "60px"}}>
      
      <AdminSidebar />
      <div className="newContainer" >
        <div className="top" >
          <h1> ADD NEW {uppercaseChoice}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            
             {form}



          </div>
        </div>
      </div>
    </div>
  );
};

export default Newentity;
