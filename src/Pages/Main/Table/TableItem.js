import React, {useContext} from 'react';
import {contextBlock} from "../../../Context";

function TableItem({title, top, phone, check, handleCheck, checkOneUser, id}) {
    const {isOpenModal, setIsOpenModal, users, setCurrentUser} = useContext(contextBlock)
    return (
        <div className={top ? 'table_item tHead borderBt' : 'table_item bottom_item'}>
            <div className='checkUser'>
                <label
                    className={top ? 'labelWrap marginTopCheck' : 'labelWrap mt-md-1'}
                    onClick={() => {
                        top ? handleCheck() : checkOneUser(id)
                    }}
                    style={check ? {borderColor :'#00B533'} : {}}
                >
                    {check && <div className='labelBg' />}
                </label>
            </div>
            <div className='userData'>
                {top ? 'Foydalanuvchi' :
                    <div className='bottomUser'>
                        <div className='userLogo'><i className="ri-user-3-fill"/></div>
                        <div className='dataUser'>
                            <div>{title}</div>
                            <div>{phone}</div>
                        </div>
                    </div>
                }
            </div>
            <div className='telegram'>
                {top ? 'Telegram' : <div className='bottom_tg'>
                    <div>TgContact : NO</div>
                    <div>TgGroup : 1</div>
                </div>}
            </div>
            <div className='courses'>
                {top ? 'Kurslar' : <div className={'bottom_courses'}>
                    1
                </div>}
            </div>
            <div className='hisob'>
                {top ? 'Joriy balans' : <div className='bottom_shot'>
                    <div>1 000 000 UZS</div>
                    <div>Registration</div>
                </div>}
            </div>
            {!top &&
            <div className='modal_icon'>
                <div onClick={() => {
                    setIsOpenModal(!isOpenModal);
                    setCurrentUser(users[id-1]);
                }}>
                    <i className="ri-error-warning-line"/>
                </div>
            </div>
            }
        </div>
    );
}

export default TableItem;