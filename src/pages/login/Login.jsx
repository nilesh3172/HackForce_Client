import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import imag from './college.jpg'
import { baseurl } from "../../services/helper";
import useBackButtonReload from "../../hooks/backbutton";
const Login = () => {
  useBackButtonReload();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      console.log('in');
      const res = await axios.post(`${baseurl}/api/auth/login`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      if(res.data.isAdmin){
        navigate("/adminprofile");
      }
      if(!res.data.isAdmin)
        navigate("/profile");
      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
     
      <div className="leftSection"  >
      <img src={imag} alt="img" style={{width:"147vh"}}  />
      </div>
      <div className="rightSection">
        
        <div className="lContainer">
          <h1>WCE Sangli</h1>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span className="errorMessage">{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
