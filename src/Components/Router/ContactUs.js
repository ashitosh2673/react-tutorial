import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/UserActions";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../Redux/counterSlice";

const ContactUs = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log("state", state);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{users.error}</h2>;
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <h2>Current Medicine Count {state.medicine.medicineCount}</h2>
      <h2>Counter Value {state.counter.value}</h2>
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      {/* increment counter */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* decrement counter */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* increment by 5 */}
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 5
      </button>
    </div>
  );
};

export default ContactUs;
