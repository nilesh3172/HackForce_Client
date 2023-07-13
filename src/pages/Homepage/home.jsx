import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../../components/MainFeaturedPost/mainfeaturedpost';
import Homesidebar from "../../components/sidebar/homesidebar";
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import "./home.css"
import img from './idol.jpg'
import {baseurl} from "../../services/helper"
import useBackButtonReload from '../../hooks/backbutton';
const mainFeaturedPost = {
  title: 'Walchand college of engineering,Sangli',
  description:
"  Walchand College of Engineering became autonomous in 2007. The college revamped its academic structure and contents, in consultation with few US and IIT academic experts",
  image: img,
  imageText: 'main image description',
  // linkText: 'Continue reading…',
};

const post = [
  {
    title: 'Students',
    description: 'Students Enrolled : '
  },
  {
    title: 'Courses',
    description: 'No of course : ',
  }
];

  




export default function Blog() {

  const [studentCount, setStudentCount] = React.useState(0);
  const [courseCount, setCourseCount] = React.useState(0);

  axios.get(`${baseurl}/api/users/getStudentCount`)
  .then((res)=>{
    setStudentCount(res.data["count"]);
  })
  .catch((err)=>{
    console.log(err);
  })
  
  axios.get(`${baseurl}/api/course/getCoursecount`)
  .then((res)=>{
    setCourseCount(res.data["count"]);
  })
  .catch((err)=>{
    console.log(err);
  })
  useBackButtonReload();
  return (
    
    <div className="home">
      <Homesidebar />
      <Container maxWidth="false" style={{ marginTop: '100px' }}>
        <div className="newContainer">

          <MainFeaturedPost post={mainFeaturedPost} />
          
          <Grid container spacing={4}>
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
                      {post[0].title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {post[0].description + studentCount}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>

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
                      {post[1].title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {post[1].description + courseCount}
                    </Typography>
                  </CardContent>

                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>

  );
}

