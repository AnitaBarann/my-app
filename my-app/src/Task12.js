import React, {Component} from 'react'
import {database} from "./firebase";

class Task12 extends Component {
    componentDidMount() {
        database.ref('myData')
            .set({
                name: 'Anita',
                surname: 'Baran',
                age:18

            })
            .then(()=> console.log('Hurrrrrra!!!'))
            .catch(() => console.log('buuuuuuuuuu!!!!!!!!'))

    }
    render() {
        return (
            <div>
                Saving object with my
                personal data to "myData"
            </div>
        )
    }

}
export default Task12
