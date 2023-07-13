import "./course.css"
import Sidebar from "../../../components/sidebar/Sidebar";
import Grid from '@mui/material/Grid';
import FeaturedPost from '../../../components/FeaturedPost/featuredpost';
import useFetch from "../../../hooks/useFetch";
import { useContext, useState } from "react";
import { AuthContext } from '../../../context/AuthContext';
import { CircularProgress } from "@mui/material";
import axios from "axios";
import {baseurl} from "../../../services/helper"
import useBackButtonReload from "../../../hooks/backbutton";
const New = () => {
    useBackButtonReload();
    const { user } = useContext(AuthContext);
    const [userCoureses, setCourses] = useState([]);
    if (user == null) {
        <CircularProgress />
    }
    const { data } = useFetch(`${baseurl}/api/course/getcourses`)
    axios.get(`${baseurl}/api/users/getstudent/${user.username}`)
    .then((result)=>{
        setCourses(result.data.courses);
    })
    return (
        <div className="course">
            <Sidebar />


            <div className="newContainer" >

                <div className="topplace" >
                    <div ><h1 >COURSE</h1></div>
                </div>
            


            <div className="topbar">
                <div className="role"><h1>Available Courses</h1></div>

                <Grid container spacing={4}>
                    {data.map((obj) => (
                        <FeaturedPost key={obj.course_code} post={obj} 
                        username={user.username} button="ENROLL" />
                    ))}
                </Grid>
            </div>
            <div className="topbar" >
                <div className="role"><h1>Your Enrolled Courses</h1></div>

                <Grid container spacing={4}>
                    {userCoureses.map((obj) => (
                        <FeaturedPost key={obj.course_code} post={obj} username={user.username} button="REMOVE" />
                    ))}
                </Grid>
            </div>

            </div>

        </div>
    );
};

export default New;
