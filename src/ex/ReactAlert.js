import React, {Component} from "react";
import {Alert, UncontrolledAlert} from "reactstrap";

class ReactAlert extends Component {
    render() {
        return(
            <>
                <Alert color={"light"}>
                    Simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color={"warning"}>
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
            </>
        )
    }
}

export default ReactAlert;