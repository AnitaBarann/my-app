import React, { Component } from 'react';


class App extends Component {

    getHandler = () => {

        fetch('https://ad-snadbox.firebaseio.com/users/anita.json')
        .then(response => response.json())
            .then(console.log)
        console.log('data')
};

    render() {
    return (
        <div>
        <button onClick={this.getHandler}>Get data from our end point</button>
        </div>
    );
  }
}

export default App;
