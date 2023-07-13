import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import axios from 'axios';
import {baseurl} from "../../services/helper"
function FeaturedPost(props) {
  const { post, username, button } = props;
  const enrollCourse = async (course_code) =>{
      console.log(username, course_code, "For Enrolling ");
      try{
        await axios.post(`${baseurl}/api/course/addcourse`, {'username':username, 'course_code':course_code})
        .then((res)=>{
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      catch(err){
        console.log(err);
      }
  }
  const derollCourse = async (course_code) => {
    console.log(username, course_code, "For Deroll");
    try{
      if(username ===undefined || course_code === undefined) return;
      await axios.post(`${baseurl}/api/course/removecourse`, {'username':username, 'course_code':course_code})
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card
          sx={{
            display: 'flex',
            backgroundColor: '#DDE6ED',
            margin: '1rem 2rem 1rem 2rem', // Top, Right, Bottom, Left
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.course_code}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.faculty}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Button  variant='contained' onClick={()=>{ if(button === 'ENROLL'){enrollCourse(post.course_code)}else{derollCourse(post.course_code)}}}> {button}</Button>
              
            </Typography>
          </CardContent>
         
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    faculty: PropTypes.string.isRequired,
    course_code: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
