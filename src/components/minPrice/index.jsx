import React, { useState } from 'react';
import InterLookServices from '../../services/inLook';
const MinPrice = () => {
  const [details, setDetails] = useState({
    checkIn: '',
    checkOut: '',
    cityKey: '', //68 Synny Beach
    regionKey:'', //2 varna, 3 bourgas
    pageSize: '400000',
    rowIndexFrom: '',
    cacheGuid: '',
    serviceType: 'eval',
    adults: '2',
    children: [],
  });
  const [childsNum, setChildsNum] = useState('0');
  const checkInSet = (e) => {
    e.preventDefault();
    setDetails({ ...details, checkIn: e.target.value, checkOut: e.target.value });
  };
  const [prices, setPrices] = useState([]);
  const [request, setRequest] = useState({ view: false, result: '', loading:false });
  const [totalCount, setTotalCount] = useState('');
  const serviceReset = () => {
    setDetails({ ...details, cacheGuid: '', rowIndexFrom: '' });
    setTotalCount('');
    setPrices([]);
    setRequest({ view: false, result: '', loading:false });
  };
  function childrenAgesRender(num) {
    let html = [];
    for (let i = 0; i < +num; i++) {
      html.push(
        <React.Fragment key={i}>
          <label htmlFor={'child'[i]}>age - child {i + 1}</label>
          <input
            type="text"
            id={'child'[i]}
            value={details['children'][i] || ''}
            size="2"
            onChange={(e) => arrUpdate(i, e.target.value)}
          />
        </React.Fragment>
      );
      //   html.push(i);
      // <input
      //   type="text"
      //   value={details.children[i]}
      //   onChange={(e) => setDetails({ ...details, children: details.children.push(e.targeet.value) })}
      // />
    }
    return html;
  }
  const arrUpdate = (index, value) => {
    const arrTemp = [...details.children];
    arrTemp[index] = value;
    setDetails({ ...details, children: arrTemp });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    setRequest({...request, loading:true})
    InterLookServices.minPrices({
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      pageSize: details.pageSize,
      cityKey: details.cityKey,
      rowIndexFrom: details.rowIndexFrom,
      cacheGuid: details.cacheGuid,
      serviceType: details.serviceType,
      adults: details.adults,
      children: details.children,
      regionKey: details.regionKey
    })
      .then((result) => {
        // setPrices([result.a]);
        console.log(result);
        setRequest({ view: true, result: result.requeststr, loading: false });
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
      <h2>SearchHotelServicesMinHotel</h2>;
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>booking details:</legend>
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
          <label htmlFor="cityKey">region key: </label>
           <input
            type="text"
            id="regionKey"
            size="2"
            value={details.regionKey}
            onChange={(e) => setDetails({ ...details, regionKey: e.target.value })}
          />
          <label htmlFor="adults">adults: </label>
          <input
            type="text"
            id="adults"
            size="1"
            value={details.adults}
            onChange={(e) => setDetails({ ...details, adults: e.target.value })}
          />
          <label htmlFor="childsNum">childs: </label>
          <select
            value={childsNum}
            id="childsNum"
            onChange={(e) => {
              setChildsNum(e.target.value);
              const arrTemp = [...details.children];
              const newTemp = arrTemp.slice(0, e.target.value);
              setDetails({ ...details, children: newTemp });
            }}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          {/* {childrenAgesRender(childsNum).map((el, i) => (
            <React.Fragment key={i}>
              <label htmlFor={'child'[el]}>age - child {i + 1}</label>
              <input
                type="text"
                id={'child'[el]}
                value={details['children'][i]}
                size="2"
                onChange={(e) => arrUpdate(i, e.target.value)}
              />
            </React.Fragment>
          ))} */}
          {childrenAgesRender(childsNum)}
        </fieldset>
        <fieldset>
          <legend>Service parameters:</legend>
          <label htmlFor="service">select service</label>
          <select
            id="service"
            onChange={(e) => setDetails({ ...details, serviceType: e.target.value })}
            value={details.service}>
            <option value="eval">evaluation</option>
            <option value="prod">production</option>
          </select>
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
        <button disabled={details.checkIn===details.checkOut}>Submit</button>
      </form>
      <button onClick={() => console.log(request.result)} disabled={!request.view}>
        view request
      </button>
      <button onClick={serviceReset}>clear service params</button>
      <button onClick={() => console.log(details)}>view details</button>
      {/* {!!request.loading && <div>request: {request}</div>} */}
      {!!request.loading &&<div>Loading ...</div>}
      {!!prices &&
        prices.map((el, i) => {
          return (
            <div key={i}>
              {i + 1}, {el.id}, {el.hotel}, {el.roomType}, {el.accommodation}, {el.priceAddWithCost}{' '}
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default MinPrice;
