// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    render () {
        return(
            <div>
                <input type="password" onKeyUp={(e) => {console.log('Entering password...')}} />
            </div>
        )
    }
}