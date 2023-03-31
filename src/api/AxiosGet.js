import {Component} from "react";
import axios from "axios";

class AxiosGet extends Component {
    componentDidMount() {
        axios.get('http://date.jsontest.com')
            .then(response => {
                alert(response.data.date);
            })
    }

    render() {
        return (
            <h2>axios get</h2>
        )
    }
}

export default AxiosGet;