import React, { useState } from 'react';
const MinPrice = () => {
  const [details, setDetails] = useState({
    checkIn: '',
    checkOut: '',
    cityKey: '68',
    pageSize: '400',
    rowIndexFrom: undefined,
    cacheGuid: undefined,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <React.Fragment>
      <h2>Min Price</h2>;
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>booking details:</legend>
          <label htmlFor="checkIn">check-in: </label>
          <input
            type="date"
            id="checkIn"
            value={details.checkIn}
            onChange={(e) => setDetails({ ...details, checkIn: e.target.value })}></input>
          <label htmlFor="checkOut">check-out: </label>
          <input
            type="date"
            id="checkOut"
            value={details.checkOut}
            onChange={(e) => setDetails({ ...details, checkOut: e.target.value })}></input>
          <label htmlFor="cityKey">city key: </label>
          <input
            type="text"
            id="cityKey"
            size="2"
            value={details.cityKey}
            onChange={(e) => setDetails({ ...details, cityKey: e.target.value })}
          />
        </fieldset>
        <fieldset>
          <legend>Service parameters:</legend>
          <label htmlFor="pageSize">page size: </label>
          <input
            type="text"
            id="pageSize"
            size="2"
            value={details.pageSize}
            onChange={(e) => setDetails({ ...details, pageSize: e.target.value })}
          />
          <label htmlFor="rowIndexFrom"> row index from</label>
          <input type="text" value={details.rowIndexFrom} disabled />
        </fieldset>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};
export default MinPrice;
