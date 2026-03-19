import React from 'react';
import UserContext from  from './userContext';

const UserContextProvider = ({children}) => {
    return (
        <>
            <UserContext.Provider>
                {children}
            </UserContext.Provider>
            
        </>
    )
}

export default UserContextProvider