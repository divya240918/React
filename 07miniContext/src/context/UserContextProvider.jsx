import React from 'react';
import UserContext from  './userContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null) //central data storage
    return (
        <>
            <UserContext.Provider value={{user, setUser}}> //value: data that you want to share globally
                {children}
            </UserContext.Provider> //Provider: provides data to all child components
            //user: stores data
            //setUser: updates data
        </>
    )
}

export default UserContextProvider