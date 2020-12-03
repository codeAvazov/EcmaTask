import React, {createContext, useEffect, useState} from 'react';
import {usersData} from "./dataSource/usere";

export const contextBlock = createContext();

export const Context = ({children}) => {
    const [users, setUsers] = useState([]);
    const [currentTitle, setCurrentTitle] = useState('Foydalanuvchilar');
    const [currentUser, setCurrentUser] = useState({firstName : 'A', lastName : 'B', phone : '+998939980989'})
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        setUsers(usersData());
    }, [])

    return (
        <contextBlock.Provider 
            value={{
                users,
                currentTitle,
                setUsers,
                setCurrentTitle,
                currentUser,
                setCurrentUser,
                isOpenModal,
                setIsOpenModal,
            }}
        >
            {children}
        </contextBlock.Provider>
    )
}
