import React, {useEffect, useState} from 'react';
import Sidebar from "./Pages/Sidebar/Sidebar";
import './App.scss';
import Navbar from "./Pages/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Modal from "./Components/Modal/Modal";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleResize = () => {
        if(window.innerWidth < 768) {
            setIsOpenMenu(false);
        } else if(window.innerWidth > 768) {
            setIsOpenMenu(true);
        }
    }

    window.addEventListener('resize', () => {
        handleResize();
    })

    useEffect(() => {
        handleResize();
    }, [])

    return (
    <div className='layoutApp'>
        <div className='right_block'>
            <div className="container">
                <Navbar/>
                <Main/>
            </div>
        </div>
        <div className={isOpenMenu ? 'left_menu' : 'left_menu l-0'}>
            <Sidebar setIsOpen={() => {setIsOpenMenu(!isOpenMenu)}}/>
            <div className='mobile-toggle' onClick={() => setIsOpenMenu(!isOpenMenu)}>
                {isOpenMenu ? <i className="ri-arrow-left-s-line"/> : <i className="ri-arrow-right-s-line"/>}
            </div>
        </div>
        <Modal />
    </div>
  );
}

export default App;
