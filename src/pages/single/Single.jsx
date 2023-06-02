import "./single.scss";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";

const Single = () => {
  const [role, setRole] = useState("user");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="single">
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
                <div className="detailItem">
                  <span className="detailItem">Role:</span>
                  {/* <span className="itemValue"></span> */}
                  {/* <select
                    value={role}
                    onChange={handleRoleChange}
                    className="itemValue"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        </div>
      </div>
    </div>
  );
};

export default Single;