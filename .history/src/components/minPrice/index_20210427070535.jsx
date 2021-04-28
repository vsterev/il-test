import React, { useState } from 'react';
const MinPrice = () => {
  const [details, setDetails] = useState({ checkIn: '', checkOut: '2021-10-21' });
  return (
    <React.Fragment>
      <h2>Min Price</h2>;
      <form>
        <label htmlFor="checkIn">check-in</label>
        <input type="date" id="checkIn"></input>
        <label htmlFor="checkOut">check-out</label>
        <input type="date" id="checkOut" value={details.checkOut} onChange={(e) => console.log(e.target.value)}></input>
      </form>
    </React.Fragment>
  );
};
export default MinPrice;
