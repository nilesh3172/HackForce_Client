import "./widget.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { baseurl } from "../../services/helper";
const Widget = ({ choice }) => {
  

  let url;

  if (choice === 'course') {
    url = '/course/getCoursecount';
   
  }
   if (choice === 'student') {
    url = '/users/getStudentCount';
  }

  const CHOICE = choice ? choice.toUpperCase() : "";


  const { data, loading } = useFetch(`${baseurl}/api${url}`);



  

  return (
    <div className="widget">
      <div className="left">
        <span className="title" style={{textAlign:'center'}}> TOTAL {CHOICE}S</span>
        {loading
                    ? "loading..."
                    :(
        <span className="counter" style={{textAlign:'center'}}>
          {data.count}
        </span>)}
        <Link to={`/${choice}s`}>  <span className="link" style={{textAlign:'center'}} >All {choice}s</span> </Link>
       
      </div>
    </div>
  );
};

export default Widget;
