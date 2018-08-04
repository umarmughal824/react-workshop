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
      search_data: null,
      isLoading: true,
      isRepoPage: false,
      value: ""
    };
    this.onChange = this.onChange.bind(this);
    this.searchByKeyValue = this.searchByKeyValue.bind(this);
    this.setRepoData = this.setRepoData.bind(this);
  }

  componentWillMount(){
    console.log('...componentWillMount...');
      axios.get("https://api.github.com/users")
        .then(({data}) => {
          console.log(data);
          this.setState({
             ...this.state,
            data,
            isLoading: !this.state.isLoading
          });
        })
        .catch(function (error){

        });
  }

  setRepoData(data){
    this.setState({
       ...this.state,
      data,
      isRepoPage: true
    });
  }

  getCurrentView(){
    const { data, search_data, isLoading } = this.state;
    let view = null;

    if(isLoading){
      view = "Loading ..."
    }
    else{
      if(search_data){
        view = <GithubUserList users={search_data} setRepoData={this.setRepoData}/>
      }
      else{
        view = <GithubUserList users={data} setRepoData={this.setRepoData}/>
      }
    }
    return view;
  }

  onChange(event){
    // console.log(event.target.value);
    this.searchByKeyValue(event.target.value);
  }

  searchByKeyValue(q){
    if(q === ""){
      this.setState({
         ...this.state,
         isLoading: false,
         search_data: null
      });
    }
    else{
      let searched_data = [];
      const { data, isRepoPage } = this.state;

      const searched = data.find(function (obj){ 
        
        console.log(obj);
        if(isRepoPage){
          console.log('isRepoPage', true);
          console.log('obj.name.indexOf(q)', obj.name.indexOf(q));
          if(obj.name.indexOf(q) !== -1){
            searched_data.push(obj)
          }
        }
        else
          if(obj.login.indexOf(q) !== -1) 
            searched_data.push(obj)
      });
      // console.log(searched_data);
      this.setState({
          ...this.state,
         search_data: searched_data,
         isLoading: false,
      });
    }
  }

  render() {
    const page = this.getCurrentView();
    return (
      <div>
        <h4>Git Dashboard</h4>
        <TextInput name="search" placeholder="Search" onChange={this.onChange}/> <br/>
        <Label title="Showing All Results" /><br/><br/><br/>
        {page}
      </div>
    );
  }
}

export default GitDashboard;
