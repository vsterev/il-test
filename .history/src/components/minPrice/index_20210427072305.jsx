import React, { useState } from 'react';
const MinPrice = () => {
  const [details, setDetails] = useState({ checkIn: '', checkOut: '' });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <React.Fragment>
      <h2>Min Price</h2>;
      <form onSubmit={submitHandler}>
        <label htmlFor="checkIn">check-in</label>
        <input type="date" id="checkIn"></input>
        <label htmlFor="checkOut">check-out</label>
        <input
          type="date"
          id="checkOut"
          value={details.checkOut}
          onChange={(e) => setDetails({ ...details, checkOut: e.target.value })}></input>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};
export default MinPrice;
