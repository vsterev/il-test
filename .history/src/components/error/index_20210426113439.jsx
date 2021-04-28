import React from 'react';
const Error = (props) => {
  console.log(props);
  return <div>Error page - {props.msg}</div>;
};
export default Error;
