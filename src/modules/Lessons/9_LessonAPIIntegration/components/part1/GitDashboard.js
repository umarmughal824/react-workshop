import React, { Component } from 'react';

import TextInput from '../../../../common/components/TextInput';
import Label from '../../../../common/components/Label';
import GithubUserList from './GithubUserList';
import axios from 'axios';


class GitDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      view: 'users'
    };
  }

  componentWillMount(){
    console.log('...componentWillMount...');
    setTimeout(function(){
      axios.get("https://api.github.com/users")
        .then(({data}) => {
          console.log(data);
          this.setState({
            data,
            isLoading: !this.state.isLoading
          });
          console.log('state set done');
        })
        .catch(function (error){

        });
    }, 5000);
  }

  getCurrentView(){
    const { data, isLoading } = this.state;
    let view = null;

    console.log(`isLoading= ${isLoading}`);
    if(isLoading){
      view = "Loading ..."
    }
    else{
      view = <GithubUserList users={data}/>
    }
    return view;
  }

  render() {
    console.log('render');
    const page = this.getCurrentView();
    return (
      <div>
        <h4>Git Dashboard</h4>
        <TextInput name="search" placeholder="Search"/> <br/>
        <Label title="Showing All Results" /><br/>
        {page}
      </div>
    );
  }
}

export default GitDashboard;