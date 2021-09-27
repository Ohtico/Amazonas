import React, { useEffect, useState } from 'react';
import AppRouter from './routers/AppRouter';
import { UserContext } from './hooks/UserContext';

export const RegistroApp = () => {


    const [login, setLogin] = useState(false)
        console.log(login);
    return (
        <UserContext.Provider value={{login, setLogin}}>
            <AppRouter />
        </UserContext.Provider>
    )       
}