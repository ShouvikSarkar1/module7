import React, {useContext, useState} from 'react';

// Create Context
export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    const handleUpdateUser = (newUser) => {
        setCurrentUser(newUser)
    }

    return (
        <UserContext.Provider value ={{currentUser, handleUpdateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

// Create Custom Hook
export const useUserContext = () =>{
    return useContext(UserContext);
}