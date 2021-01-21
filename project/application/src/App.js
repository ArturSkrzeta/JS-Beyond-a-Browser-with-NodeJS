import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser, deleteUser } from './services/UserService'

class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  confirmUserCreation = () => {
    document.getElementById("success").animate({
      'opacity' : '1'
    },4000);
  };

  getAllUsers = () => {
    getAllUsers()
    .then(users => {
      console.log(users) //response from nodeJS
      this.setState({users: users, numberOfUsers: users.length}) // updating state according to what we get form nodeJS
    });
  };

  createUser = () => {
      this.confirmUserCreation()
      document.getElementById("create-user-form").reset();
      let user = this.state.user
      user.id = this.state.numberOfUsers + 1
      createUser(this.state.user)
        .then(response => {
          console.log(response); // response from node JS in json - we can see it in browser's console
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
      this.getAllUsers()
  }

  deleteUser = (user) => {
    deleteUser(user._id)
      .then(response => {
        console.log(response); // response from node JS
        this.setState({user: null, numberOfUsers: this.state.numberOfUsers - 1})
      });
      this.getAllUsers()
  }

  // it updates state on every chane in user form
  // state will be ready before submitting to nodeJS
  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstname = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastname = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      } else if (e.target.name === 'phonenumber') {
          user.phonenumber = e.target.value;
      }
      this.setState({user})
  }



  render() {

    return (
      <div className="App">
        <Header></Header>
        <div className="app_container">
          <div className="app_container_up">
            <div className="app_container_up_left">
                <CreateUser onChangeForm={this.onChangeForm} createUser={this.createUser}></CreateUser>
            </div>
            <div className="app_container_up_right">
                <DisplayBoard numberOfUsers={this.state.numberOfUsers} getAllUsers={this.getAllUsers}></DisplayBoard>
            </div>
          </div>
          <div className="app_container_down">
            <Users users={this.state.users} deleteUser={this.deleteUser}></Users>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
