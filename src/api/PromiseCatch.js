import {Component} from "react";

class PromiseCatch extends Component {
    componentDidMount() {
        new Promise((resolve, reject) => {
            reject(Error("ERROR Info"));
        })
        .then(result => console.log("then " + result))
        .catch(error => console.error("catch " + error));
    }

    render() {
        return (
            <h2> Promise catch </h2>
        )
    }
}

export default PromiseCatch;