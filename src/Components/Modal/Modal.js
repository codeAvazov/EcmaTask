import React, {useContext} from 'react';
import './Modal.scss';
import {contextBlock} from "../../Context";

function Modal() {
    const {currentUser, isOpenModal, setIsOpenModal} = useContext(contextBlock)
    return (
        <div className={!isOpenModal ? 'modal_userData' : 'modal_userData openModal'}>
            <div className='opacity_block'>
            </div>
            <div className='modal_block'>
                <div className='userData'>
                        <div className='bottomUser'>
                            <div className='userLogo'><i className="ri-user-3-fill"/></div>
                            <div className='dataUser'>
                                <div>{`${currentUser.firstName} ${currentUser.lastName}`}</div>
                                <div>{currentUser.phone}</div>
                            </div>
                        </div>
                </div>
                <div className='modal_close' onClick={() => setIsOpenModal(!isOpenModal)}><i className="ri-close-circle-line" /></div>
            </div>
        </div>
    );
}

export default Modal;