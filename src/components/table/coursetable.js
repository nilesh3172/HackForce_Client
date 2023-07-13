import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../services/helper";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./table.css";
import useFetch from "../../hooks/useFetch";

const All = () => {
  const { data, loading } = useFetch(`${baseurl}/api/course/getcourses`);

  async function deleteCourse(course_code) {
    try {
      await axios.delete(`${baseurl}/api/course/delete/${course_code}`);
      console.log(course_code);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                backgroundColor: "#0059B2",
                color: "white",
                fontSize: "20px",
              }}
              className="tableCell"
              align="center"
              valign="middle"
            >
              Course Code
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#0059B2",
                color: "white",
                fontSize: "20px",
              }}
              className="tableCell"
              align="center"
              valign="middle"
            >
              Course Name
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#0059B2",
                color: "white",
                fontSize: "20px",
              }}
              className="tableCell"
              align="center"
              valign="middle"
            >
              Faculty
            </TableCell>
            <TableCell
              style={{
                backgroundColor: "#0059B2",
                color: "white",
                fontSize: "20px",
              }}
              className="tableCell"
              align="center"
              valign="middle"
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            data &&
            data.map((course) => (
              <TableRow key={course.course_code} className="tablerow">
                <TableCell className="tableCell" align="center" valign="middle">
                  <Link
                    to={`/course/redirect-page.html?course_code=${encodeURIComponent(
                      course.course_code
                    )}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {course.course_code}
                  </Link>
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">
                  {course.name}
                </TableCell>
                <TableCell className="tableCell" align="center" valign="middle">
                  {course.faculty}
                </TableCell>

                <TableCell className="tableCell" align="center" valign="middle">
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                    onClick={() => updateCourse(course.course_code)}
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "10px" }}
                    className="button"
                    onClick={() => deleteCourse(course.course_code)}
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
