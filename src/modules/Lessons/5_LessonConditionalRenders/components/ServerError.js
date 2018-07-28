import React from 'react';

const ServerError = (props) => {
  return (
	<span>{props.error["message"]}...</span>
  );
}

export default ServerError;