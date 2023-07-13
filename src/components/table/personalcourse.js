import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { useContext} from "react";

import "./table.css";

const All = () => {
    const { user } = useContext(AuthContext);

    
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Course Code</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Course Name</TableCell>
          <TableCell style={{backgroundColor:"#0059B2", color: "white",fontSize : "20px"}} className="tableCell"  align="center" valign="middle" >Faculty</TableCell>
         
          </TableRow>
        </TableHead>

        <TableBody>
       
           
         
          
           { user.courses.map((user) => (
              <TableRow key={user.course_code} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {user.course_code}{" "}
                  </Link>
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">
                  {user.name}
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">{user.faculty}</TableCell>

               
              </TableRow>
            ))}
       
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default All;
