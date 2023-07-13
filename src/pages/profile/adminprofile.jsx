import "./profile.css";

import AdminSidebar from "../../components/sidebar/adminsidebar"

import { AuthContext } from '../../context/AuthContext';
import { useContext} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useBackButtonReload from "../../hooks/backbutton";
const Profile = () => {
  useBackButtonReload();
 const { user } = useContext(AuthContext);

  if (user == null) {
    <CircularProgress />
  }


  return (
    <div className="Profile">
    
    <AdminSidebar  />
        <div className="ProfileContainer">
      
          <div className="top">
            <div className="left">

              <h1 className="title">Information</h1>
              <div className="item">
               
                <div className="details">
                  <h1 className="itemTitle">{user.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">PRN:</span>
                    <span className="itemValue">
                    {user.username}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{user.email}</span>
                  </div>
                 
            
                </div> 
               </div>
            </div>

          </div>
       
          
        </div>
      

    </div >
  );
};

export default Profile;
