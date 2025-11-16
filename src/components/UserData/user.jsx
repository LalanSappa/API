import { React, use, useEffect, useState } from "react";
import axios from "axios";





const user = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://690f552045e65ab24ac350f7.mockapi.io/api/v1/user"
      );
      setUserData(response.data);
    };
    fetchData();
  }, []);

  return <>
  <div id="main">
    <h1>User API</h1>
    {
        userData && userData.map((user)=>{
            return <div key={user.id} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {/* <p><strong>Phone:</strong> {user.phone}</p> */}
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Status:</strong> {user.status}</p>
            </div>
        })
    }
  </div>
  </>;
};
export default user;