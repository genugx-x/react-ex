import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactHook from "./ex/ReactHook";
import ReturnMap from "./ex/ReturnMap";
import ReactAlert from "./ex/ReactAlert";
import ReactstrapBadges from "./ex/ReactstrapBadges";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <>
            <ReactHook/>
            <ReturnMap/>
            <ReactAlert/>
            <ReactstrapBadges/>
        </>
    );
}

export default App;
