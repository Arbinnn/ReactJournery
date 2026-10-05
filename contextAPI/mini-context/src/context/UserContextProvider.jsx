import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null );
    return (
        //"I'm putting user and setUser into the UserContext."
        //"Provide user and setUser to all of my children."
        /*
        UserContext
┌─────────────────────────────┐
│ user                        │
│ setUser                     │
└─────────────────────────────┘
        */
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
