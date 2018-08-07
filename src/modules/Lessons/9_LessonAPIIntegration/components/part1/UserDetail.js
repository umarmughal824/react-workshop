import React from 'react';

const UserDetail = ({user}) => {
	return (
	<span>		
		Login: <span>"{user.login}"</span> &nbsp;
		Url: <a href={user.url}>{user.login}</a> &nbsp;
		Type: <span>{user.type} { user.site_admin ? <strong>/ Admin </strong> : ""}</span>
	</span>
	);
}

export default UserDetail;
