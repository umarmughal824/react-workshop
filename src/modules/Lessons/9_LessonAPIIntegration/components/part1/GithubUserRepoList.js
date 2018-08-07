import React from 'react';

const GithubUserRepoList = ({repos}) => {
	return (
		<div>
		{
			repos ? repos.map(repo => <div key={repo.name}>
				<a href={repo.html_url}>{repo.name}</a><br/>
				Description: <span>{repo.description}</span><br/>
				Default Branch: <span>{repo.default_branch}</span><br/>
				Language: <span>{repo.language}</span><br/>
				Last Updated At: <span>{repo.updated_at}</span><br/>
				License: <span>{repo.license === null ? "N/A" : repo.license.name}</span><br/>
				Stars: <span>{repo.stargazers_count}</span><br/>
				Open Issues: <span>{repo.open_issues}</span><br/>
				Public: <span>{!repo.private}</span><br/>
				Url: <a href={repo.url}>{repo.url}</a><br/><br/><br/>
				</div>
				) : "Loading ..."
		}
		</div>
	);
}

export default GithubUserRepoList;
