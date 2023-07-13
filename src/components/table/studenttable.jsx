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
import CircularProgress from "@mui/material/CircularProgress";
import {baseurl} from "../../services/helper"
const All = () => {
  const { data, loading } = useFetch(`${baseurl}/api/users/getstudents`);
  console.log(data);
  function  updatestudent(username){
    const url = '/user/redirect-page.html?course_code=' + encodeURIComponent(username);
    window.location.href = baseurl+url;
   
  }

  async function  deleteStudent(username){
    try{
      await axios.delete(`${baseurl}/api/users/delete/${username}`);
      window.location.reload();
    }
    catch (err) {console.log(err)}
    
  }


 
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >PRN</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >Name</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >College mail ID</TableCell>
          <TableCell className="tableCell"  align="center" valign="middle"  style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} >Action</TableCell>

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
              <TableRow key={data.username} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {data.username}{" "}
                  </Link>
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                  {data.name}
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">{data.email}</TableCell>
                

                <TableCell className="tableCell" align="center" valign="middle">
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                    onClick={()=>{updatestudent(data.username)}}
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                    onClick={()=>{ deleteStudent(data.username)}}
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
