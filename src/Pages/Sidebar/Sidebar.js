import React, {useContext, useEffect, useState} from 'react';
import './Sidebar.scss';
import {Link} from "react-router-dom";
import {Pdp} from "../../Components/Icons";
import {contextBlock} from "../../Context";
import {navData} from "../../dataSource/usere";

function Sidebar({setIsOpen}) {
    const [currentLink, setCurrentLink] = useState(4);
    const {setCurrentTitle} = useContext(contextBlock)

    const setLink = ({id, title}) => {
        setCurrentLink(id);
        setCurrentTitle(title);
        if(window.innerWidth < 768) {
            setIsOpen();
        }
    }

    return (
        <div className={'sidebar'}>
            <div className='navigation'>
                <div className='logo_nav'>
                    <Pdp/>
                </div>
                <div className='list_nav'>
                    {navData().map(i => (
                        <Link
                            key={i.id}
                            to={i.to}
                            onClick={() => setLink(i)}
                            className={currentLink !== i.id ? 'list_nav_item' : 'list_nav_item active_link'}
                        >
                            <div className={'item_icon'}>{i.icon}</div>
                            <div className={'item_title'}>{i.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Sidebar;