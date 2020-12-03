import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
        <div className='navbar_top'>
            <div className='nav_title'>
                <div className='userName'>Dilshod Mirsoatov</div>
                <div className='iconNav mx-4'><i className="ri-user-6-line"/></div>
                <div className='iconNav'><i className="ri-notification-line"/></div>
            </div>
        </div>
    );
}

export default Navbar;