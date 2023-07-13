
import AdminSidebar from "../../../components/sidebar/adminsidebar";

import axios from "axios";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import "./newentity.css";
import useFetch from "../../../hooks/useFetch";
import {baseurl} from "../../../services/helper"
import useBackButtonReload from "../../../hooks/backbutton";
const Updateentity = (props) => {
  useBackButtonReload();
  const {choice} = props;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Extract the attribute value using the parameter name
  const attributeValue = urlParams.get('course_code');
  



  // Use the extracted attribute value as needed
  console.log('Attribute Value:', attributeValue);
    let url;
  if(choice === 'course')
  {
    url = `/api/course/getcourse/${attributeValue}`;
  }
  if(choice === 'student')
  {
    url = `/api/users/getstudent/${attributeValue}`;
  }
  const { data } = useFetch(`${baseurl}${url}`);
  const uppercaseChoice = choice.toUpperCase();


  const handlestudent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      'username' : formData.get('username') ,
      'name' : formData.get('name') ,
      'email' : formData.get('email') 
    }
    
    try {

      await axios.put(`${baseurl}/api/users/update`, data)
      .then((res)=>{
         console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
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
      await axios.put(`${baseurl}/api/course/update`, data);
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
                
                name="username"
                value={data.username}
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
               
                placeholder={data.name}
                id="name"
                autoComplete="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                
                placeholder={data.email}
                id="email"
                autoComplete="email"
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
                
                name="course_name"
                placeholder={data.name}
                autoComplete="course_name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="course_code"
                
                value={data.course_code}
                id="course_code"
                autoComplete="course_code"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="faculty"
                
                id="faculty"
                placeholder={data.faculty}
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
    <div className="new" style={{paddingTop:'100px'}}>
      <AdminSidebar />
      <div className="newContainer">
      
        <div className="top" >
          <h1> Update {uppercaseChoice}</h1>
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

export default Updateentity;
