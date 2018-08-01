import React, { Component } from 'react';

import UserImage from './UserImage';
import UserDetail from './UserDetail';
import UserReposButton from './UserReposButton';

const GithubUserList = ({users}) => {

	return (
		<div>
		{
			users.map(user => <div>
				<UserImage image={user.avatar_url} />
				<UserDetail user={user} />
				<UserReposButton />	
				</div>
			)
		}
		</div>
	);
}

export default GithubUserList;