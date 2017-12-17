import React, {Component} from 'react'
import {database} from './firebase'

class Push extends Component {
    state = {
        pushList: null
    }

    componentDidMount() {
        // push without arguments return
        // reference to new place in DB
        const newRef = database.ref('pushList')
            .push()
        console.log('newRef', newRef)
        // we can set on this new reference
        newRef.set('Data to set in newRef')

        // push with arguments
        // creates new place in DB
        // and sets its value
        const newRef2 = database.ref('pushList')
            .push('Data to set directly in push!')
        console.log('newRef2', newRef2)

        // start listenening pushList
        database.ref('pushList')
            .on(
                'value',
                (snapshot)=>{
                    this.setState({
                        pushList: snapshot.val()
                    })
                }
            )
    }

    render() {
        return (
            <div>
                Push
                <ul>
                    {
                        this.state.pushList
                        &&
                        Object.entries(this.state.pushList)
                            .map(
                                ([key, value]) => (
                                    <li key={key}>
                                        {value}
                                    </li>
                                )
                            )
                    }
                </ul>
            </div>
        )
    }
}

export default Push