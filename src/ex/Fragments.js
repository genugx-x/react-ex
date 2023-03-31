import React, {Component} from "react";

class Fragments extends Component {
    render() {
        return (
            // 컴포넌트 단위로 element를 return 할 때 <html> 태그로 전체를 감싸지 않으면
            // 에러가 발생한다. <Fragment> 태그로 감싸면 불필요한 html 태그를 추가하지 않아도 된다.
            // <React.Fragment> 또는 <> 으로 사용하면 된다.
            <>
                <p>아무거나 아무거나</p>
                <span>span거나 span거나</span>
            </>
        )
    }
}

export default Fragments;
