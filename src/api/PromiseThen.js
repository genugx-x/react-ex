import {Component} from "react";

class PromiseThen extends Component {
    componentDidMount() {
        new Promise(resolve => {
            setTimeout(function () {
                resolve('Promise');
            }, 1500);
        }).then(function(result) {
            console.log(result);
            return result + 'Then';
        }).then(result => {
            console.log(result);
        })
    }

    render() {
        return(
            <h2>Promise</h2>
        )
    }
}

export default PromiseThen;