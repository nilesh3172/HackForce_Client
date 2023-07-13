import "./new.css";
import AdminSidebar from "../../../components/sidebar/adminsidebar";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button'
import Studenttable from '../../../components/table/studenttable';
import Coursetable from '../../../components/table/coursetable';

const New = (props) => {
 
  const {choice} = props;
 
  
  const CHOICE = choice ? choice.toUpperCase() : "";

  return (
    <div className="new">
       <AdminSidebar />
      <div className="newContainer">
     
        <div className="top" style={{margin: '20px', marginTop :'100px', padding:'0px', paddingLeft:'30px'}}>
          <div className="role"><h1>{CHOICE}</h1></div>
          <Link to={"/newentity"+choice} style={{ textDecoration: "none" ,color:"black"} }>
          <div className="button" ><Button style={{width:'110px',marginRight:'30px'}} variant="contained">ADD NEW</Button></div>
          </Link>
        </div>
        <div className="students">
      {choice === "student"?<Studenttable />: <Coursetable />}
         
          
        </div>
      </div>
    </div>
  );
};

export default New;
