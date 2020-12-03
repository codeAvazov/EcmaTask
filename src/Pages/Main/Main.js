import React, {useContext} from 'react';
import './Main.scss';
import {contextBlock} from "../../Context";
import FunctionalSection from "./FunctionalSection/FunctionalSection";
import Table from "./Table/Table";

function Main() {
    const {currentTitle} = useContext(contextBlock)
    return (
        <div className='mainBlock'>
            <div className='mainTitle'>{currentTitle}</div>
            <FunctionalSection/>
            <div className='mt-3'>
                <Table/>
            </div>
        </div>
    );
}

export default Main;