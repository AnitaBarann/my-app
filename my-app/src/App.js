import React, {Component} from 'react';


class App extends Component {

    state = {
        response: 'No response yet'
    };

    getHandler = () => {

        fetch('https://ad-snadbox.firebaseio.com/users/anita.json')
            .then(response => response.json())
            .then((json) => {
                this.setState({response: JSON.stringify(json)})
            })
    };

    postHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/anita.json',
            {
                method: 'Post',
                body: JSON.stringify({
                    name: 'abc',
                    lastname: 'def',
                    active: false
                })
            }
        ).then(() => console.log('POST DONE'))
    };

    putHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/anita.json',
            {
                method: 'Put',
                body: JSON.stringify({
                    name: 'ALa',
                    lastname: 'LALA',
                    active: false
                })
            }
        ).then(() => console.log('PUT DONE'))
    };

    patchHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/anita.json',
            {
                method: 'Patch',
                body: JSON.stringify({
                    active: true
                })
            }
        ).then(() => console.log('PATCH DONE'))
    };

    deleteHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/anita.json',
            {method: 'Delete'}
        ).then(() => console.log('DELETE DONE'))

    };

    render() {
        return (
            <div>
                <button onClick={this.getHandler}>Get data from our end point</button>
                <button onClick={this.postHandler}>Post data from our end point</button>
                <button onClick={this.putHandler}>Put data from our end point</button>
                <button onClick={this.patchHandler}>Patch data from our end point</button>
                <button onClick={this.deleteHandler}>Delete data from our end point</button>

                <p>
                    {this.state.response}
                </p>
            </div>
        );
    }
}

export default App;
