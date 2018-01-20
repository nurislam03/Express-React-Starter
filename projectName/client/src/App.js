import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({
            users: users
        }))
    }

    render() {
        const users = this.state.users;
        return (
            <div className="App">
                <h1>Users</h1>
                {users.map((user, id) =>
                    <div key={id}>{user.firstName} {user.lastName}</div>
                )}
            </div>
        );
    }
}

export default App;
