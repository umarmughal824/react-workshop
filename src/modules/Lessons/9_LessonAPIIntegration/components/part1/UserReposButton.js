import React from 'react';

const UserReposButton = ({value, onClick}) => {
	return (
		<button value={value} onClick={onClick} >View Repositories</button>
	);
}

export default UserReposButton;