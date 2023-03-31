import React, {Component} from "react";
import {Badge, Button} from "reactstrap";


class ReactstrapBadges extends Component {

    render() {
        return (
            <>
                <h1>
                    PRODUCT NAME <Badge color={"secondary"}>hit</Badge>
                </h1>
                <Button color={"light"} outline>
                    Accessor <Badge color={"dark"}>4</Badge>
                </Button>
                <Badge color={"danger"} pill>pill</Badge>
                <Badge href={"http://localhost:8080"} color={"light"}>여기여기</Badge>
            </>
        )
    }
}

export default ReactstrapBadges;