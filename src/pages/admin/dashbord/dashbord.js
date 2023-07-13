
import AdminSidebar from "../../../components/sidebar/adminsidebar";
import "./dashbord.css";
import Widget from "../../../components/widget/Widget";
import Studenttable from "../../../components/table/studenttable"


const Home = () => {
  
  return (
    <div className="dashboard">
     <AdminSidebar />
      <div className="homeContainer">
      
        <div className="widgets">
          <Widget  choice ="student" />
          <Widget  choice ="course" />
  
        </div>
        
        <div className="listContainer">
          <div className="listTitle">STUDENTS WITH RESPECTIVE COURSES</div>
          <Studenttable />
        </div>
      </div>
    </div>
  );
};

export default Home;
