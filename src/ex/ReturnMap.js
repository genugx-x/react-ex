import React, {Component} from "react";

class ReturnMap extends Component {
    render() {
        const elementArray = [
            <li>A</li>,
            <li>B</li>,
            <li>C</li>
        ]
        return (
            <ul>
                {elementArray.map(v => v)}
            </ul>
        )
    }
}

export default ReturnMap;