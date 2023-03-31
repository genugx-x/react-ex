import {Component} from "react";
import axios from "axios";

class AxiosPost extends Component {
    componentDidMount() {
        axios.post('http://date.jsontest.com', {
            a: "A", b: "B"
        }).then(response => {
            alert("post --> " + response.data.date);
        })
    }

    render() {
        return (
            <h2>axios get</h2>
        )
    }
}

export default AxiosPost;