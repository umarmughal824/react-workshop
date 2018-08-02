import React, { Component } from 'react';

import UserImage from './UserImage';
import UserDetail from './UserDetail';
import UserReposButton from './UserReposButton';
import GithubUserRepoList from './GithubUserRepoList';

import axios from 'axios';

class GithubUserList extends Component{
	constructor(props){
		super(props);

		this.state = {
			users: props.users,
			repos: null,
			isLoading: false,
      current_page: 'users'
		};
		this.onClick = this.onClick.bind(this);
	}

	componentWillReceiveProps(nextProps){
		console.log('...componentWillRecieveProps...', nextProps);
		if(nextProps.users !== this.state.users){
			this.setState({
				 ...this.state,
				users: nextProps.users
			});
		}
	}
	
	onClick(event){
		this.setState({
			isLoading: true
		});
		const username = event.target.value;
		const link = `https://api.github.com/users/${username}/repos`
      axios.get(link)
        .then(({data}) => {
          this.setState({
            repos: data,
            isLoading: !this.state.isLoading,
            current_page: 'repos'
          });
        })
        .catch(function (error){

        });
	}

	render(){
		const { users, repos, isLoading } = this.state;
		return (
			<div>
			{ !isLoading ? repos!== null ? <GithubUserRepoList repos={repos} /> :	
					
						users.map(user => <div key={user.login}>
							<UserImage image={user.avatar_url} />
							<UserDetail user={user} />
							<UserReposButton value={user.login} onClick={this.onClick} />	
							</div>
						)
					
				 : "Loading ..."
			}
			</div>
		);
	}
}

export default GithubUserList;