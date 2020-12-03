import React, {useContext, useState} from 'react';
import './Table.scss';
import {contextBlock} from "../../../Context";
import TableItem from "./TableItem";

function Table() {
    const {users, setUsers} = useContext(contextBlock);
    const [allChecked, setAllChecked] = useState(false);



    const SetAllCheckBox = () => {
        setUsers(users.map(i => {
            if(allChecked) {
                i.isActive = true;
            } else {
                i.isActive = false;
            }
            i.isActive = !i.isActive;
            return i;
        }));
        setAllChecked(!allChecked);
    }

    const checkOneUser = (id) => {
        setUsers(users.map(i => {
            if(i.id === id) {
                i.isActive = !i.isActive;
                return i;
            } else return i;
        }))
    }

    return (
        <div className='table_block'>
            <header>
                <div>
                    <TableItem top={true} check={allChecked} handleCheck={SetAllCheckBox} />
                </div>
            </header>
            <main>
                {users.map(i => (
                    <TableItem key={i.id} id={i.id} title={`${i.firstName} ${i.lastName}`} check={i.isActive} phone={i.phone} top={false} checkOneUser={checkOneUser}  />
                ))}
            </main>
        </div>
    );
}

export default Table;