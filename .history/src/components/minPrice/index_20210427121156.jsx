import React, { useState } from 'react';
import InterLookServices from '../../services/inLook';
const MinPrice = () => {
  const [details, setDetails] = useState({
    checkIn: '',
    checkOut: '',
    cityKey: '68',
    pageSize: '400',
    rowIndexFrom: '',
    cacheGuid: '',
  });
  const checkInSet = (e) => {
    e.preventDefault();
    setDetails({ ...details, checkIn: e.target.value, checkOut: e.target.value });
  };
  const [prices, setPrices] = useState([]);
  const [request, setRequest] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    InterLookServices.minPrices({
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      pageSize: details.pageSize,
      cityKey: details.cityKey,
      rowIndexFrom: details.rowIndexFrom,
      cacheGuid: details.cacheGuid,
    })
      .then((result) => {
        // setPrices([result.a]);
        console.log(result);
        setRequest(result.requeststr);
        setPrices([...prices, ...result.arrPrices]);
        setDetails({ ...details, cacheGuid: result.cacheGuid, rowIndexFrom: result.totalCount });
        setTotalCount(result.totalCount);

        // setDetails({ ...details, cacheGuid: result.cacheGuid });
        // setDetails({ ...details, rowIndexFrom: result.rowIndexFrom });
      })
      .catch(console.log);
  };
  return (
    <React.Fragment>
      <h2>Min Price</h2>;
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>booking details1:</legend>
          <label htmlFor="checkIn">check-in: </label>
          <input type="date" id="checkIn" value={details.checkIn} onChange={checkInSet}></input>
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
          <label htmlFor="rowIndexFrom">row index from: </label>
          <input
            id="rowIndexFrom"
            type="text"
            value={details.rowIndexFrom}
            size="2"
            onChange={(e) => setDetails({ ...details, rowIndexFrom: e.target.value })}
          />
          <label htmlFor="totalCount">total count: </label>
          <input
            type="text"
            value={totalCount}
            disabled
            size="2"
            // onChange={(e) => setDetails({ ...details, rowIndexFrom: e.target.value })}
          />
          <label htmlFor="cacheGuid">cache Guid: </label>
          <input
            type="text"
            id="cacheGuid"
            value={details.cacheGuid}
            disabled
            size="64"
            onChange={(e) => setDetails({ ...details, cacheGuid: e.target.value })}
          />
        </fieldset>
        <button>Submit</button>
      </form>
      <button onClick={() => console.log(prices)}>prices</button>
      {!!request && <div>{request}</div>}
      {!!prices &&
        prices.map((el, i) => {
          return <div>{(i, el.id, el.hotel, el.roomType, el.price)}, </div>;
        })}
    </React.Fragment>
  );
};
export default MinPrice;
