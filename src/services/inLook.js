const InterlookServices = {
  minPrices: (data) => {
    return fetch(`http://192.168.10.10:4000/il/min-price`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => {
        if(res.status===204) {
          throw new Error('error fetching prices from endpoint')
        }
      return res.json();
    })
      // .catch((e) => console.log(e));
  },
};
export default InterlookServices;
