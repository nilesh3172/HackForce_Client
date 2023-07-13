import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./table.css";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import {baseurl} from "../../services/helper"
import CircularProgress from "@mui/material/CircularProgress";
const All = () => {

  const { data, loading } = useFetch(`${baseurl}/api/course/getcourses`);


  
  function  updateCourse(course_code){
   const url = '/course/redirect-page.html?course_code=' + encodeURIComponent(course_code);
   window.location.href = baseurl+url;
  }



  async function  deleteCourse(course_code){
    try{
      const data = {"course_code" :course_code}
      console.log(data);
      await axios.delete(`${baseurl}/api/course/delete/${course_code}`);
      console.log(course_code);
      window.location.reload();
    }
    catch (err) {console.log(err)}
    
  }
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Course Code</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Course Name</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Faculty</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {loading ? (
             <TableRow>
             <TableCell align="center" colSpan={5}>
               <CircularProgress />
             </TableCell>
           </TableRow>
          ) : (
            data &&
            data.map((data) => (
              <TableRow key={data.course_code} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {data.course_code}{" "}
                  </Link>
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">
                  {data.name}
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">{data.faculty}</TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                    onClick={() => updateCourse(data.course_code)}
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                    onClick={() => deleteCourse(data.course_code)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default All;
