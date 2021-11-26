const InterlookServices = {
  minPrices: (data) => {
    return fetch(`http://192.168.10.10:4000/il/min-price`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((e) => console.error(e));
  },
};
export default InterlookServices;
