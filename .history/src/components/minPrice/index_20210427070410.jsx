import React, { useState } from 'react';
const MinPrice = () => {
  const [details, setDetails] = useState({ checkIn: '', checkOut: '' });
  return (
    <React.Fragment>
      <h2>Min Price</h2>;
      <form>
        <label htmlFor="checkIn">check-in</label>
        <input type="date" id="checkIn"></input>
        <label htmlFor="checkOut">check-out</label>
        <input type="date" id="checkOut" value={details.checkIn} onChange={(e) => console.log(e.target.value)}></input>
      </form>
    </React.Fragment>
  );
};
export default MinPrice;
