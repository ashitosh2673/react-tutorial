import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const { userId, departmentId } = useParams();
  const [userData, setUserData] = useState({});
  const history = useHistory();
  const medicineCount = useSelector((state) => state.medicineCount);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => setUserData(json));
  }, [userId]);

  const fetchNextCustomerData = () => {
    history.push(
      `/about-us/${parseInt(userId) + 1}/${parseInt(departmentId) + 1}`
    );
  };

  return (
    <div>
      <h1>About Us</h1>
      <h2> Hello : {userData.name}</h2>
      <h3>
        {" "}
        User ID: {userId} and Department ID: {departmentId} and my medicine
        coubt is {medicineCount}
      </h3>{" "}
      <button onClick={() => fetchNextCustomerData()}>Click Me</button>
    </div>
  );
};

export default AboutUs;
